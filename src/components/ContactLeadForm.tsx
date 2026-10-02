import { useState, type FormEvent } from "react";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { apiUrl } from "@/config/api";
import { siteConfig, whatsappLink } from "@/config/siteConfig";

export function ContactLeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus("sending"); const form = event.currentTarget; const data = new FormData(form);
    const payload = Object.fromEntries(["name", "phone", "email", "service", "message"].map((key) => [key, String(data.get(key) ?? "")]));
    try { const response = await fetch(apiUrl("/api/leads"), { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...payload, source: "site-contato" }) }); if (!response.ok) throw new Error(); form.reset(); setStatus("success"); } catch { setStatus("error"); }
  }
  if (status === "success") return <div className="surface-panel rounded-xl p-6 sm:p-8" role="status"><CheckCircle2 className="h-8 w-8 text-primary" aria-hidden="true" /><h2 className="mt-4 text-3xl">Solicitação recebida</h2><p className="mt-3 text-muted-foreground">Se desejar atendimento imediato, continue pelo WhatsApp.</p><Button asChild variant="whatsapp" size="lg" className="mt-6"><a href={whatsappLink()} target="_blank" rel="noreferrer">Falar com a Nortão no WhatsApp</a></Button></div>;
  return <form className="surface-panel rounded-xl p-6 sm:p-8" onSubmit={submit}><div className="grid gap-5 sm:grid-cols-2"><div className="space-y-2 sm:col-span-2"><Label htmlFor="lead-name">Nome</Label><Input id="lead-name" name="name" autoComplete="name" maxLength={100} required /></div><div className="space-y-2"><Label htmlFor="lead-phone">Telefone</Label><Input id="lead-phone" name="phone" type="tel" autoComplete="tel" maxLength={30} required /></div><div className="space-y-2"><Label htmlFor="lead-email">E-mail (opcional)</Label><Input id="lead-email" name="email" type="email" maxLength={254} /></div><div className="space-y-2 sm:col-span-2"><Label htmlFor="lead-service">Como podemos ajudar? (opcional)</Label><Input id="lead-service" name="service" maxLength={100} /></div><div className="space-y-2 sm:col-span-2"><Label htmlFor="lead-message">Mensagem (opcional)</Label><Textarea id="lead-message" name="message" rows={5} maxLength={2000} /></div></div>{status === "error" ? <p className="mt-5 text-sm text-destructive" role="alert">Não foi possível enviar agora. Tente novamente ou use o WhatsApp {siteConfig.whatsapp.display}.</p> : null}<div className="mt-6 flex flex-wrap gap-3"><Button type="submit" variant="hero" size="lg" disabled={status === "sending"}>{status === "sending" ? <LoaderCircle className="animate-spin" aria-hidden="true" /> : null}{status === "sending" ? "Enviando" : "Enviar solicitação"}</Button>{status === "error" ? <Button asChild variant="outlineGold" size="lg"><a href={whatsappLink()} target="_blank" rel="noreferrer">Usar o WhatsApp</a></Button> : null}</div></form>;
}