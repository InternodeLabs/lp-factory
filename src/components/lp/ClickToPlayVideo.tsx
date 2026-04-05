"use client";

import { useState } from "react";
import Image from "next/image";

export function ClickToPlayVideo({
  posterSrc,
  videoId,
  alt,
}: Readonly<{
  posterSrc: string;
  videoId: string;
  alt: string;
}>) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="Product video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full rounded-xl md:rounded-2xl"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="group relative block w-full cursor-pointer"
      aria-label="Play video"
    >
      <Image
        src={posterSrc}
        alt={alt}
        width={2048}
        height={1456}
        priority
        className="w-full"
        unoptimized
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110 md:h-20 md:w-20">
          <svg
            className="ml-1 h-8 w-8 text-gray-900 md:h-10 md:w-10"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
