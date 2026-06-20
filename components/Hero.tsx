import Image from "next/image";
import { Badge } from "./Badge";

export function Hero() {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_16%,rgba(213,180,106,0.22),transparent_30%),radial-gradient(circle_at_12%_10%,rgba(238,183,195,0.45),transparent_34%)]" />
      <div className="mx-auto grid min-h-[calc(92vh-3rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-2xl pt-12 lg:pt-0">
          <Badge>Wedding Dress Code</Badge>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.32em] text-espresso/75">Shaneika & George</p>
          <h1 className="mt-4 font-display text-[4.4rem] font-semibold leading-[0.86] text-ink sm:text-[6rem] lg:text-[7.5rem]">
            High Tea Elegance
          </h1>
          <div className="gold-line my-8 h-px w-full max-w-md" />
          <p className="max-w-xl text-lg leading-8 text-ink/78 sm:text-xl">
            Formal garden chic in pastel colors, fancy hats, gloves, soft florals, ivory details, and champagne-gold polish.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Formal", "Garden Chic", "Pastels", "Fancy Hats", "Gloves"].map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
          <p className="mt-7 max-w-xl rounded-[8px] border border-champagne/40 bg-ivory/70 p-4 text-sm font-medium leading-6 text-espresso shadow-sm">
            Fascinators will be provided on a first-come basis.
          </p>
        </div>

        <div className="relative min-h-[540px] w-full lg:min-h-[680px]">
          <div className="absolute left-0 top-8 h-[72%] w-[58%] overflow-hidden rounded-[8px] shadow-romantic">
            <Image
              src="/images/dress-code/garden-party-pastels.jpg"
              alt="Garden party guests in pastel dresses and formal suits."
              fill
              priority
              sizes="(min-width: 1024px) 34vw, 88vw"
              className="object-cover"
            />
          </div>
          <div className="absolute right-0 top-0 h-[48%] w-[48%] overflow-hidden rounded-[8px] border-4 border-ivory shadow-romantic">
            <Image
              src="/images/dress-code/white-boater-fascinator.jpg"
              alt="White boater fascinator and ivory dress inspiration."
              fill
              priority
              sizes="(min-width: 1024px) 28vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-2 right-6 h-[48%] w-[56%] overflow-hidden rounded-[8px] border-4 border-ivory shadow-romantic">
            <Image
              src="/images/dress-code/navy-champagne-suit.jpg"
              alt="Navy suit with champagne accessories."
              fill
              priority
              sizes="(min-width: 1024px) 30vw, 70vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
