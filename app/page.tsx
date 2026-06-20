import { Badge } from "@/components/Badge";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { GuideCard } from "@/components/GuideCard";
import { Hero } from "@/components/Hero";
import { galleryImages } from "@/data/images";

const palette = [
  { name: "Soft Blush", value: "#eeb7c3" },
  { name: "Ivory", value: "#fffaf2" },
  { name: "Champagne Gold", value: "#d5b46a" },
  { name: "Powder Blue", value: "#b7d9e8" },
  { name: "Garden Sage", value: "#9ead8d" },
  { name: "Lavender Mist", value: "#c9b7de" }
];

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="px-5 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-4">
          {[
            ["Theme", "High Tea Elegance"],
            ["Dress Code", "Formal / Garden Chic"],
            ["Colors", "Pastels, ivory, champagne"],
            ["Accessories", "Fancy hats & gloves"]
          ].map(([label, value]) => (
            <div key={label} className="luxury-border rounded-[8px] bg-ivory/78 p-6 shadow-card backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-espresso/65">{label}</p>
              <p className="mt-3 font-display text-3xl font-semibold leading-tight text-ink">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Badge>The Assignment</Badge>
            <h2 className="mt-5 font-display text-5xl font-semibold leading-none text-ink sm:text-6xl">
              Romantic, polished, and ready for tea.
            </h2>
          </div>
          <div className="rounded-[8px] border border-champagne/35 bg-white/50 p-6 text-base leading-8 text-ink/76 shadow-card backdrop-blur md:p-8">
            Dress as if you are stepping into a luxury garden tea party: refined tailoring, feminine silhouettes, soft color, graceful hats, and elevated accessories. Pastels and florals are encouraged, while ivory, champagne, and garden tones should feel intentional and elegant.
          </div>
        </div>
      </section>

      <Gallery images={galleryImages} />

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <GuideCard
            eyebrow="Outfit Guide"
            title="For Women"
            items={[
              "Tea-length, midi, or formal dresses in blush, powder blue, lavender, mint, sage, ivory, or soft floral prints.",
              "Fascinators, brimmed hats, gloves, pearl details, structured clutches, and polished heels or dressy sandals.",
              "Choose refined fabrics like lace, chiffon, satin, jacquard, organza, or elevated floral textures."
            ]}
          />
          <GuideCard
            eyebrow="Outfit Guide"
            title="For Men"
            items={[
              "Suits, dress jackets, or polished separates in cream, navy, sage, tan, pastel blue, soft grey, or champagne accents.",
              "Ties, pocket squares, dress shoes, lapel flowers, waistcoats, and tasteful pattern mixing are welcome.",
              "Aim for crisp tailoring and garden-party color rather than casual weekend wear."
            ]}
          />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-espresso/70">Color Palette</p>
            <h2 className="mt-3 font-display text-5xl font-semibold leading-none text-ink sm:text-6xl">
              Pastel, ivory, and champagne-gold.
            </h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {palette.map((color) => (
              <div key={color.name} className="luxury-border rounded-[8px] bg-ivory/80 p-3 shadow-card">
                <div className="h-28 rounded-[6px] border border-black/5" style={{ backgroundColor: color.value }} />
                <p className="mt-4 text-sm font-semibold text-ink">{color.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[8px] bg-ink p-7 text-ivory shadow-romantic md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-champagne">What to Avoid</p>
              <h2 className="mt-3 font-display text-5xl font-semibold leading-none sm:text-6xl">Keep it elevated.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Jeans, shorts, sneakers, flip-flops, or casual T-shirts.",
                "Neon colors, overly loud prints, or clubwear styling.",
                "Wrinkled linen, distressed denim, or anything too relaxed for a formal wedding.",
                "All-black outfits unless softened with garden-chic color or champagne accessories."
              ].map((item) => (
                <div key={item} className="rounded-[8px] border border-ivory/18 bg-white/7 p-5 text-sm leading-7 text-ivory/82">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
