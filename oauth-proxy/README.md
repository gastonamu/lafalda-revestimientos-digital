# OAuth Proxy para Decap CMS

Worker de Cloudflare que actúa como intermediario en el flujo OAuth de GitHub para Decap CMS. Necesario porque el CMS corre en el browser y no puede manejar el `client_secret` de GitHub.

## Deploy en Cloudflare Dashboard (sin CLI)

### 1. Crear el Worker

1. Cloudflare dashboard → **Workers & Pages** → **Create application** → **Create Worker**.
2. Nombre: `carrera-oauth`. Tocar **Deploy**.
3. Pantalla del worker → **Edit code** → pegar el contenido de `worker.js` reemplazando lo que venga por default. **Save and deploy**.

### 2. Configurar variables (secrets)

En el worker → **Settings** → **Variables and Secrets** → **Add variable** (modo **Secret**, no Plaintext):

- `GITHUB_CLIENT_ID` = (el Client ID de tu GitHub OAuth App)
- `GITHUB_CLIENT_SECRET` = (el Client Secret de tu GitHub OAuth App)

Guardá.

### 3. Conectar al dominio `oauth.carrerarevestimiento.com.ar`

En el worker → **Settings** → **Triggers** → **Add Custom Domain** → escribir `oauth.carrerarevestimiento.com.ar` → **Add domain**.

Cloudflare se encarga del DNS automáticamente (sobreescribe el A record placeholder y emite HTTPS).

### 4. Conectar al CMS

Editar `public/admin/config.yml` del repo y agregar (o descomentar) bajo `backend`:

```yaml
backend:
  name: github
  repo: gastonamu/lafalda-revestimientos-digital
  branch: main
  base_url: https://oauth.carrerarevestimiento.com.ar
  auth_endpoint: /auth
```

Commit + push + redeploy en Coolify.

## Test

1. Ir a `https://www.carrerarevestimiento.com.ar/admin/`
2. Click en **Login with GitHub**
3. Se abre popup de GitHub → autorizar la app
4. Popup se cierra y el CMS queda logueado.

## Deploy alternativo via Wrangler CLI

Si preferís CLI:

```sh
cd oauth-proxy
npm i -g wrangler
wrangler login
wrangler secret put GITHUB_CLIENT_ID
wrangler secret put GITHUB_CLIENT_SECRET
wrangler deploy
```

(Requiere un `wrangler.toml` que no incluimos por defecto porque la versión dashboard es suficiente para este proyecto.)
