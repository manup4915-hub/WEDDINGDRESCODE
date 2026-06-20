type GuideCardProps = {
  eyebrow: string;
  title: string;
  items: string[];
};

export function GuideCard({ eyebrow, title, items }: GuideCardProps) {
  return (
    <article className="luxury-border rounded-[8px] bg-ivory/78 p-6 shadow-card backdrop-blur md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-espresso/70">{eyebrow}</p>
      <h3 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">{title}</h3>
      <ul className="mt-6 space-y-4 text-sm leading-7 text-ink/78 md:text-base">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-3 h-px w-7 shrink-0 bg-champagne" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
