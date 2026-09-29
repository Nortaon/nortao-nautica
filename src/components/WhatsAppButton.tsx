import { MessageCircle } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";
import { siteConfig, whatsappLink } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

type WhatsAppButtonProps = {
  label?: string;
  message?: string;
  className?: string;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
};

export function WhatsAppButton({
  label = "Falar no WhatsApp",
  message,
  className,
  variant = "whatsapp",
  size = "default",
}: WhatsAppButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className={className}>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} — ${siteConfig.whatsapp.display}`}
      >
        <MessageCircle aria-hidden="true" />
        {label}
      </a>
    </Button>
  );
}

/** Botão flutuante de WhatsApp, sempre acessível. */
export function WhatsAppFloating() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Falar no WhatsApp ${siteConfig.whatsapp.display}`}
      className={cn(
        "fixed right-4 bottom-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full",
        "bg-whatsapp text-whatsapp-foreground shadow-[var(--shadow-elegant)]",
        "transition-transform duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
      )}
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}

export default WhatsAppButton;
