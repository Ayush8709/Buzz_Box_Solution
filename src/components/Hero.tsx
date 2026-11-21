import { useEffect, useState } from "react";
import { heroSlides, words } from "../data";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % words.length);
    }, 2400);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ink">
      {heroSlides.map((src, slide) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out ${
            slide === index % heroSlides.length
              ? "scale-100 opacity-100 kenburns"
              : "scale-105 opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-black/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/15 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="absolute inset-x-0 bottom-16 z-10 mx-auto max-w-[1240px] px-5 lg:bottom-24 lg:px-8">
        <h1 className="sr-only">Buzz Box Events and Solutions</h1>
        <div className={`section-line mb-6 ${ready ? "hero-enter" : "opacity-0"}`} />
        <p
          className={`font-serif text-[40px] leading-[1.05] font-extrabold tracking-[0.3px] text-paper capitalize sm:text-[60px] lg:text-[68px] ${
            ready ? "hero-enter hero-enter-delay-1" : "opacity-0"
          }`}
        >
          <span className="text-gold">Unique Idea</span> And Great Vision
        </p>
        <p
          key={words[index]}
          className={`mt-2 font-serif text-[40px] leading-[1.05] font-extrabold tracking-[0.3px] text-paper capitalize sm:text-[60px] lg:text-[68px] word-in ${
            ready ? "" : "opacity-0"
          }`}
          aria-live="polite"
        >
          {words[index]}
        </p>
        <p
          className={`mt-6 max-w-xl text-base font-medium leading-[1.7] text-mist sm:text-[17px] ${
            ready ? "hero-enter hero-enter-delay-2" : "opacity-0"
          }`}
        >
          Buzz Box Events and Solutions. Wedding planner, corporate events, and birthday decor. Booking open for 26–27.
        </p>
        <div className={`mt-8 flex flex-wrap items-center gap-4 ${ready ? "hero-enter hero-enter-delay-3" : "opacity-0"}`}>
          <a
            href="#contact"
            className="btn-glow inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[15px] font-bold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-[#e8c09a]"
          >
            Book Now <span aria-hidden="true">↗</span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[15px] font-medium text-paper transition duration-300 hover:border-gold hover:text-gold"
          >
            Explore Services
          </a>
        </div>
        <a
          href="#milestones"
          className={`mt-10 inline-flex text-paper/70 transition hover:text-gold ${ready ? "hero-enter hero-enter-delay-4 float-y" : "opacity-0"}`}
          aria-label="Scroll to milestones"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </div>

      <div className="absolute right-5 bottom-8 z-10 hidden gap-2 sm:flex lg:right-8">
        {heroSlides.map((_, slide) => (
          <button
            key={slide}
            type="button"
            aria-label={`Show slide ${slide + 1}`}
            onClick={() => setIndex(slide)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              slide === index % heroSlides.length ? "w-8 bg-gold" : "w-3 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
