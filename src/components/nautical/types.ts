import type { ComponentType } from "react";

export type NauticalVisualProps = {
  isStatic: boolean;
  className?: string;
};

export type NauticalVisualComponent = ComponentType<NauticalVisualProps>;
