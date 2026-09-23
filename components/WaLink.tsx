import type { ComponentProps } from "react";
import { waLink } from "@/lib/site";

type Props = Omit<ComponentProps<"a">, "href"> & { message?: string };

export function WaLink({ message, children, ...rest }: Props) {
  return (
    <a href={waLink(message)} target="_blank" rel="noopener" {...rest}>
      {children}
    </a>
  );
}
