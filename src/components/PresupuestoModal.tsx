import { useState, type ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { waLink } from "@/lib/wa";

type FormState = {
  nombre: string;
  localidad: string;
  email: string;
  consulta: string;
};

const empty: FormState = {
  nombre: "",
  localidad: "",
  email: "",
  consulta: "",
};

function armarMensaje(form: FormState): string {
  const lineas = ["Hola, me comunico para solicitar un presupuesto."];

  const datos: [string, string][] = [
    ["Nombre y apellido", form.nombre],
    ["Localidad", form.localidad],
    ["Email", form.email],
  ];
  const completados = datos.filter(([, v]) => v.trim() !== "");

  if (completados.length > 0) {
    lineas.push("");
    completados.forEach(([label, valor]) => lineas.push(`${label}: ${valor.trim()}`));
  }

  if (form.consulta.trim() !== "") {
    lineas.push("");
    lineas.push("Consulta:");
    lineas.push(form.consulta.trim());
  }

  return lineas.join("\n");
}

type Props = {
  trigger: ReactNode;
  onOpenChange?: (open: boolean) => void;
};

const PresupuestoModal = ({ trigger, onOpenChange }: Props) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(empty);

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    onOpenChange?.(next);
  };

  const update = <K extends keyof FormState>(key: K) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = waLink(armarMensaje(form));
    window.open(url, "_blank", "noopener,noreferrer");
    // Limpio el form y cierro el modal después de enviar
    setTimeout(() => {
      setForm(empty);
      handleOpenChange(false);
    }, 200);
  };

  const fieldClass =
    "bg-black/50 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-yellow-500/50 focus-visible:border-yellow-500/50 focus-visible:ring-offset-0";

  const labelClass = "text-white/70 text-xs uppercase tracking-widest font-semibold";
  const labelStyle = { fontFamily: "'Oswald', sans-serif", letterSpacing: "0.12em" } as const;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        className="bg-[#0f0f0f] border-white/10 text-white sm:max-w-md"
        style={{ borderRadius: "4px" }}
      >
        <DialogHeader>
          <DialogTitle
            className="text-2xl text-white"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
          >
            SOLICITAR <span style={{ color: "hsl(43,74%,49%)" }}>PRESUPUESTO GRATIS</span>
          </DialogTitle>
          <DialogDescription className="text-white/50 text-sm">
            Completá los datos que quieras y te respondemos por WhatsApp.
            Todos los campos son opcionales.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="nombre" className={labelClass} style={labelStyle}>
              Nombre y apellido
            </Label>
            <Input
              id="nombre"
              value={form.nombre}
              onChange={update("nombre")}
              placeholder="Tu nombre"
              className={fieldClass}
              autoComplete="name"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="localidad" className={labelClass} style={labelStyle}>
              Localidad
            </Label>
            <Input
              id="localidad"
              value={form.localidad}
              onChange={update("localidad")}
              placeholder="La Falda"
              className={fieldClass}
              autoComplete="address-level2"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="email" className={labelClass} style={labelStyle}>
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={update("email")}
              placeholder="tu@email.com"
              className={fieldClass}
              autoComplete="email"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="consulta" className={labelClass} style={labelStyle}>
              Consulta
            </Label>
            <Textarea
              id="consulta"
              value={form.consulta}
              onChange={update("consulta")}
              placeholder="Contanos brevemente tu caso"
              rows={4}
              className={fieldClass + " resize-none"}
            />
          </div>

          <button
            type="submit"
            className="btn-gold w-full flex items-center justify-center gap-2 mt-2"
          >
            <MessageCircle className="w-4 h-4" />
            Solicitar Presupuesto Gratis
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PresupuestoModal;
