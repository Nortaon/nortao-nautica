import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export type GalleryItem = { src?: string; alt?: string; caption?: string };

/**
 * Galeria preparada para receber fotos reais. Itens sem imagem exibem um
 * espaço reservado elegante, sem inventar conteúdo.
 */
export function Gallery({
  items,
  className,
}: {
  items: readonly GalleryItem[];
  className?: string;
}) {
  return (
    <ul className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {items.map((item, index) => (
        <li key={index} className="surface-panel overflow-hidden rounded-xl">
          <div className="aspect-[4/3] bg-secondary">
            {item.src ? (
              <img
                src={item.src}
                alt={item.alt ?? ""}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-primary/30">
                <ImageIcon className="h-8 w-8" aria-hidden="true" />
              </div>
            )}
          </div>
          {item.caption ? (
            <p className="px-5 py-4 text-sm text-muted-foreground">{item.caption}</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default Gallery;
