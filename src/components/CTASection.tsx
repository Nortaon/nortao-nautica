import { WhatsAppButton } from "@/components/WhatsAppButton";

type CTASectionProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  message?: string;
};

export function CTASection({
  title = "Seu projeto náutico começa aqui.",
  description = "Fale com nossa equipe e receba orientação sobre cursos, documentação e soluções náuticas.",
  buttonLabel = "Falar com a Nortão Náutica",
  message,
}: CTASectionProps) {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="surface-panel relative mx-auto max-w-5xl overflow-hidden rounded-2xl px-6 py-14 text-center sm:px-12">
        <div className="absolute inset-x-0 top-0 h-px hairline-gold" aria-hidden="true" />
        <h2 className="font-display text-3xl leading-tight text-foreground sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">{description}</p>
        <div className="mt-9 flex justify-center">
          <WhatsAppButton
            label={buttonLabel}
            variant="hero"
            size="xl"
            {...(message ? { message } : {})}
          />
        </div>
      </div>
    </section>
  );
}

export default CTASection;
