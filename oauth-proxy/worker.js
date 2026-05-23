// Cloudflare Worker — OAuth proxy para Decap CMS.
// Implementa el flujo de GitHub OAuth (Authorization Code) y devuelve
// el access_token al popup que abrió el CMS, vía window.opener.postMessage.
//
// Endpoints:
//   GET /auth     → redirige a GitHub para autorizar
//   GET /callback → recibe el ?code de GitHub, lo intercambia por token
//                   y postMessage-a al opener (el CMS).
//
// Secrets requeridos (configurar en CF dashboard → Settings → Variables):
//   GITHUB_CLIENT_ID
//   GITHUB_CLIENT_SECRET
//
// CORS está abierto al dominio del sitio.

const ORIGIN = "https://www.carrerarevestimiento.com.ar";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/auth") {
      const params = new URLSearchParams({
        client_id: env.GITHUB_CLIENT_ID,
        redirect_uri: `${url.origin}/callback`,
        scope: "repo,user",
        state: crypto.randomUUID(),
      });
      return Response.redirect(`https://github.com/login/oauth/authorize?${params}`, 302);
    }

    if (url.pathname === "/callback") {
      const code = url.searchParams.get("code");
      if (!code) {
        return new Response("Missing code", { status: 400 });
      }

      const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      });

      const tokenData = await tokenRes.json();

      if (tokenData.error || !tokenData.access_token) {
        return respondToCMS({
          ok: false,
          message: tokenData.error_description || "OAuth failed",
        });
      }

      return respondToCMS({
        ok: true,
        token: tokenData.access_token,
        provider: "github",
      });
    }

    return new Response("OAuth proxy for Decap CMS — see /auth", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  },
};

function respondToCMS({ ok, token = "", provider = "github", message = "" }) {
  // Protocolo de handshake que espera Decap CMS:
  //   1) popup envía "authorizing:github" al opener con target "*"
  //   2) opener responde con algún mensaje desde su origin
  //   3) popup envía "authorization:github:success:{json}" al e.origin recibido
  // No usamos el ORIGIN hardcoded como target en el paso 3 — usamos el origin
  // que reportó el opener, así sirve para previews/staging sin recompilar.
  const eventType = ok ? "success" : "error";
  const payload = ok ? { token, provider } : { message };
  const json = JSON.stringify(payload).replace(/</g, "\\u003c");
  const allowedOriginRe = "^https://([a-z0-9-]+\\.)?carrerarevestimiento\\.com\\.ar$";

  const html = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>OAuth</title></head>
<body>
<script>
(function() {
  var done = false;
  function receive(e) {
    if (done) return;
    if (!new RegExp(${JSON.stringify(allowedOriginRe)}).test(e.origin)) return;
    done = true;
    window.opener.postMessage(
      "authorization:github:${eventType}:${json}",
      e.origin
    );
    window.removeEventListener("message", receive, false);
    setTimeout(function () { window.close(); }, 800);
  }
  window.addEventListener("message", receive, false);
  // Saludo inicial: el opener responde y dispara receive().
  window.opener.postMessage("authorizing:github", "*");
})();
</script>
<p>Autenticación completada. Esta ventana se cerrará automáticamente.</p>
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
