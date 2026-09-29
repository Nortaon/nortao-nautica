import { MapPin } from "lucide-react";

export function LocationCard({
  label,
  city,
  address,
  note,
}: {
  label: string;
  city: string;
  address: string;
  note?: string;
}) {
  return (
    <article className="surface-panel rounded-2xl p-7">
      <p className="eyebrow">{label}</p>
      <h3 className="mt-3 flex items-center gap-2 font-display text-xl text-foreground">
        <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
        {city}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{address}</p>
      {note ? <p className="mt-3 text-sm text-foreground/75">{note}</p> : null}
    </article>
  );
}

export default LocationCard;
