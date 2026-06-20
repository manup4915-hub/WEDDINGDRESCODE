"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/data/images";
import { Lightbox } from "./Lightbox";

type GalleryProps = {
  images: GalleryImage[];
};

export function Gallery({ images }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12" id="gallery">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-espresso/70">Inspiration Gallery</p>
            <h2 className="mt-3 font-display text-5xl font-semibold leading-none text-ink sm:text-6xl">
              Looks Worth Arriving In
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-ink/72 lg:justify-self-end">
            Tap any look to view it larger. Use these images as inspiration for silhouettes, color, accessories, and the polished high-tea mood.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <button
              type="button"
              key={image.src}
              onClick={() => setActiveIndex(index)}
              className={`group relative min-h-[360px] overflow-hidden rounded-[8px] bg-ivory text-left shadow-card outline-none transition duration-300 hover:-translate-y-1 hover:shadow-romantic focus:ring-2 focus:ring-champagne ${
                index % 7 === 0 ? "lg:row-span-2 lg:min-h-[560px]" : ""
              } ${index % 7 === 3 ? "lg:col-span-2" : ""}`}
              aria-label={`Open ${image.title} in image viewer`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/82 via-ink/35 to-transparent p-5 text-ivory">
                <span className="block font-display text-2xl font-semibold">{image.title}</span>
                <span className="mt-1 block text-sm leading-6 text-ivory/82">{image.description}</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox images={images} activeIndex={activeIndex} onClose={() => setActiveIndex(null)} onNavigate={setActiveIndex} />
    </section>
  );
}
