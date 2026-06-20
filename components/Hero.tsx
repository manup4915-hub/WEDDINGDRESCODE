import Image from "next/image";
import { Badge } from "./Badge";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 py-6 sm:min-h-[92vh] sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_16%,rgba(213,180,106,0.22),transparent_30%),radial-gradient(circle_at_12%_10%,rgba(238,183,195,0.45),transparent_34%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 sm:min-h-[calc(92vh-3rem)] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-2xl pt-6 sm:pt-12 lg:pt-0">
          <Badge>Wedding Dress Code</Badge>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-espresso/75 sm:mt-8 sm:text-sm sm:tracking-[0.32em]">
            Shaneika & George
          </p>
          <h1 className="mt-4 max-w-full font-display text-[clamp(3.7rem,18vw,4.5rem)] font-semibold leading-[0.88] text-ink sm:text-[6rem] lg:text-[7.5rem]">
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

        <div className="relative mx-auto min-h-[430px] w-full max-w-[620px] sm:min-h-[560px] lg:min-h-[680px] lg:max-w-none">
          <div className="absolute left-0 top-8 h-[70%] w-[62%] overflow-hidden rounded-[8px] shadow-romantic sm:h-[72%] sm:w-[58%]">
            <Image
              src="/images/dress-code/garden-party-pastels.jpg"
              alt="Garden party guests in pastel dresses and formal suits."
              fill
              priority
              sizes="(min-width: 1024px) 34vw, 88vw"
              className="object-cover"
            />
          </div>
          <div className="absolute right-0 top-0 h-[45%] w-[50%] overflow-hidden rounded-[8px] border-4 border-ivory shadow-romantic sm:h-[48%] sm:w-[48%]">
            <Image
              src="/images/dress-code/white-boater-fascinator.jpg"
              alt="White boater fascinator and ivory dress inspiration."
              fill
              priority
              sizes="(min-width: 1024px) 28vw, 58vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-2 right-2 h-[45%] w-[60%] overflow-hidden rounded-[8px] border-4 border-ivory shadow-romantic sm:right-6 sm:h-[48%] sm:w-[56%]">
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
