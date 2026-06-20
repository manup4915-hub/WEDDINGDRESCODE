import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-champagne/45 bg-ivory/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-espresso shadow-sm backdrop-blur">
      {children}
    </span>
  );
}
