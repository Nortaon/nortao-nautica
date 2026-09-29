import { Link } from "@tanstack/react-router";
import { Check, Compass } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Course } from "@/config/siteConfig";

export function CourseCard({ course, image }: { course: Course; image?: string }) {
  return (
    <article className="surface-panel group flex flex-col overflow-hidden rounded-2xl transition-transform duration-500 hover:-translate-y-1">
      <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
        {image ? (
          <img
            src={image}
            alt=""
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
        <h3 className="font-display text-2xl text-foreground">{course.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.description}</p>

        <ul className="mt-6 space-y-2.5">
          {course.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5 text-sm text-foreground/85">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              {benefit}
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-2">
          <Button asChild variant="outlineGold" className="w-full sm:w-auto">
            <Link to={course.to}>Ver o curso {course.shortTitle}</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
