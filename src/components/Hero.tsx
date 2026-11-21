import { useEffect, useState } from "react";
import { words } from "../data";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % words.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.webp"
      >
        <source src="/images/hero.webm" type="video/webm" />
        <source
          src="https://craftworldevents.com/wp-content/uploads/Cwe-website-2-HZ-compressed.webm"
          type="video/webm"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      <div className="absolute inset-x-0 bottom-16 z-10 mx-auto max-w-[1240px] px-5 lg:bottom-24 lg:px-8">
        <h1 className="sr-only">Corporate Event Management Company in Mumbai</h1>
        <p className="font-serif text-[42px] leading-[0.95] font-medium tracking-tight text-paper sm:text-6xl lg:text-[76px]">
          <span className="text-gold">23 Years</span> Of Crafting
        </p>
        <p
          className="mt-1 font-serif text-[48px] leading-none font-medium text-paper sm:text-7xl lg:text-[92px]"
          aria-live="polite"
        >
          {words[index]}
        </p>
        <p className="mt-5 max-w-xl text-[15px] text-paper/90 sm:text-base">
          Nationally recognized event planning &amp; organising company based in Mumbai.
        </p>
        <a href="#milestones" className="mt-8 inline-flex text-paper/80 hover:text-gold" aria-label="Scroll to milestones">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
