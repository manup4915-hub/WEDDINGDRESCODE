"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import type { GalleryImage } from "@/data/images";

type LightboxProps = {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export function Lightbox({ images, activeIndex, onClose, onNavigate }: LightboxProps) {
  const touchStartX = useRef<number | null>(null);
  const activeImage = activeIndex === null ? null : images[activeIndex];

  const goTo = useCallback(
    (direction: "next" | "previous") => {
      if (activeIndex === null) return;
      const offset = direction === "next" ? 1 : -1;
      const nextIndex = (activeIndex + offset + images.length) % images.length;
      onNavigate(nextIndex);
    },
    [activeIndex, images.length, onNavigate]
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") goTo("next");
      if (event.key === "ArrowLeft") goTo("previous");
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, goTo, onClose]);

  if (!activeImage || activeIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/92 px-4 py-5 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`${activeImage.title} image viewer`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        if (touchStartX.current === null) return;
        const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
        const distance = touchEndX - touchStartX.current;
        if (Math.abs(distance) > 48) goTo(distance < 0 ? "next" : "previous");
        touchStartX.current = null;
      }}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full border border-ivory/30 bg-ivory/95 px-4 py-2 text-sm font-semibold text-ink shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-champagne"
        aria-label="Close image viewer"
      >
        Close
      </button>

      <button
        type="button"
        onClick={() => goTo("previous")}
        className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/25 bg-ivory/90 text-3xl text-ink shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-champagne sm:flex"
        aria-label="View previous image"
      >
        ‹
      </button>

      <figure className="flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4">
        <div className="relative h-[74vh] w-full">
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>
        <figcaption className="max-w-2xl text-center text-ivory">
          <p className="font-display text-2xl font-semibold">{activeImage.title}</p>
          <p className="mt-1 text-sm leading-6 text-ivory/76">{activeImage.description}</p>
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={() => goTo("next")}
        className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/25 bg-ivory/90 text-3xl text-ink shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-champagne sm:flex"
        aria-label="View next image"
      >
        ›
      </button>

      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/28 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ivory">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );
}
