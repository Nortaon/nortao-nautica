import { Link } from "@tanstack/react-router";
import { Check, Compass } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Course } from "@/config/siteConfig";

export function CourseCard({
  course,
  image,
  ctaLabel = "Quero saber mais",
}: {
  course: Course;
  image?: string;
  ctaLabel?: string;
}) {
  return (
    <article className="surface-panel group flex flex-col overflow-hidden rounded-xl transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-primary/40">
      <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
        {image ? (
          <img
            src={image}
            alt={`Formação náutica para o curso ${course.title}`}
            loading="lazy"
            width={1280}
            height={720}
            className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-primary/40">
            <Compass className="h-10 w-10" aria-hidden="true" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <p className="eyebrow">Formação náutica</p>
        <h3 className="mt-3 font-display text-3xl text-foreground">{course.title}</h3>
        <p className="mt-3 text-base leading-relaxed text-foreground/80">{course.objective}</p>

        <dl className="mt-5 space-y-3 border-t border-border pt-5 text-sm">
          <div>
            <dt className="font-semibold text-primary">Para quem é</dt>
            <dd className="mt-1 leading-relaxed text-foreground/80">{course.audience}</dd>
          </div>
          <div>
            <dt className="font-semibold text-primary">O que você encontra</dt>
            <dd className="mt-1 leading-relaxed text-foreground/75">{course.description}</dd>
          </div>
        </dl>

        <ul className="mt-6 space-y-2.5">
          {course.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5 text-sm text-foreground/85">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-auto grid gap-2 pt-8 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <WhatsAppButton
            label="Tenho interesse"
            variant="hero"
            message={`Olá! Tenho interesse no curso de ${course.title}.`}
          />
          <Button asChild variant="outlineGold">
            <Link to={course.to}>{ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
