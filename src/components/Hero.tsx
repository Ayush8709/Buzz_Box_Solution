import { useEffect, useRef, useState } from "react";
import { heroSlides, words } from "../data";
import { getGsap } from "../lib/gsap";
import { useGsapContext } from "../hooks/useGsapContext";

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % words.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, []);

  useGsapContext(root, (gsap) => {
    const targets = ".hero-line, .hero-title, .hero-word, .hero-copy, .hero-cta, .hero-scroll, .hero-dot";
    const tl = gsap.timeline({
      defaults: { ease: "power3.out", clearProps: "transform" },
      onComplete: () => {
        gsap.set(targets, { clearProps: "transform" });
      },
    });

    tl.fromTo(".hero-line", { scaleX: 0 }, { scaleX: 1, duration: 0.7, clearProps: "none" })
      .from(".hero-title", { y: 36, duration: 0.75 }, "-=0.35")
      .from(".hero-word", { y: 28, duration: 0.55 }, "-=0.45")
      .from(".hero-copy", { y: 20, duration: 0.5 }, "-=0.35")
      .from(".hero-cta", { y: 16, duration: 0.45, stagger: 0.06 }, "-=0.25")
      .from(".hero-scroll", { y: -4, duration: 0.35 }, "-=0.15")
      .from(".hero-dot", { scale: 0.7, duration: 0.3, stagger: 0.05 }, "-=0.2");

  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const { gsap } = getGsap();
    const word = root.current?.querySelector(".hero-word-inner");
    if (!word) return;
    gsap.fromTo(
      word,
      { y: 16 },
      { y: 0, duration: 0.45, ease: "power3.out", clearProps: "transform" },
    );
  }, [index]);

  return (
    <section
      id="top"
      ref={root}
      className="relative flex h-svh min-h-svh max-h-svh flex-col overflow-hidden bg-ink md:h-svh md:min-h-svh md:max-h-svh"
    >
      <div className="absolute inset-0">
        {heroSlides.map((src, slide) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`bg-photo absolute inset-0 h-full w-full object-cover object-[center_30%] transition-opacity duration-[1400ms] ease-out md:object-center ${
              slide === index % heroSlides.length ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/20 to-transparent sm:h-36" />
      <div className="ambient -left-16 top-24 hidden h-72 w-72 bg-gold/20 md:block" />
      <div className="ambient ambient-delay right-[-4rem] bottom-24 hidden h-80 w-80 bg-gold/14 md:block" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-1 flex-col justify-end px-4 pt-[72px] pb-16 sm:px-5 sm:pb-20 md:justify-center md:pt-[78px] md:pb-24 lg:px-8 lg:pb-28">
        <h1 className="sr-only">Buzz Box Events and Solutions</h1>
        <div className="hero-line section-line mb-3 sm:mb-5" />
        <p className="hero-title font-serif text-[28px] leading-[1.08] font-extrabold tracking-[0.2px] text-paper capitalize sm:text-[56px] lg:text-[68px]">
          <span className="text-gold text-glow-soft">Unique Idea</span> And Great Vision
        </p>
        <p
          className="hero-word mt-1 overflow-hidden font-serif text-[28px] leading-[1.08] font-extrabold tracking-[0.2px] text-paper capitalize sm:text-[56px] lg:text-[68px]"
          aria-live="polite"
        >
          <span key={words[index]} className="hero-word-inner inline-block">
            {words[index]}
          </span>
        </p>
        <p className="hero-copy mt-3 max-w-xl text-[14px] font-medium leading-[1.65] text-paper/90 sm:mt-5 sm:text-base sm:leading-[1.7]">
          Buzz Box Events and Solutions. Wedding planner, corporate events, and birthday decor. Booking open for 26–27.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="hero-cta btn-glow inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[14px] font-bold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0d0ae] min-[400px]:flex-none sm:px-6 sm:py-3 sm:text-[15px]"
            >
              Book Now <span aria-hidden="true">↗</span>
            </a>
            <a
              href="#services"
              className="hero-cta inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-5 py-2.5 text-[14px] font-medium text-paper backdrop-blur-sm transition duration-300 hover:border-gold hover:text-gold min-[400px]:flex-none sm:px-6 sm:py-3 sm:text-[15px]"
            >
              Explore Services
            </a>
          </div>
          <a
            href="tel:+918789081553"
            className="hero-cta inline-flex items-center gap-2 px-1 text-[14px] font-medium text-paper/85 transition hover:text-gold sm:px-2 sm:text-[15px]"
          >
            8789081553
          </a>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 sm:mt-8 sm:hidden">
          <a
            href="#milestones"
            className="hero-scroll float-y inline-flex text-paper/90 transition hover:text-gold"
            aria-label="Scroll to milestones"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
          <div className="flex gap-2">
            {heroSlides.map((_, slide) => (
              <button
                key={slide}
                type="button"
                aria-label={`Show slide ${slide + 1}`}
                onClick={() => setIndex(slide)}
                className={`hero-dot h-1.5 rounded-full transition-all duration-500 ${
                  slide === index % heroSlides.length ? "w-7 bg-gold" : "w-2.5 bg-white/35"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 mx-auto hidden w-full max-w-[1240px] items-center justify-between px-5 sm:flex lg:px-8">
        <a
          href="#milestones"
          className="hero-scroll float-y inline-flex text-paper/90 transition hover:text-gold"
          aria-label="Scroll to milestones"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
        <div className="flex gap-2">
          {heroSlides.map((_, slide) => (
            <button
              key={slide}
              type="button"
              aria-label={`Show slide ${slide + 1}`}
              onClick={() => setIndex(slide)}
              className={`hero-dot h-1.5 rounded-full transition-all duration-500 ${
                slide === index % heroSlides.length
                  ? "w-9 bg-gold"
                  : "w-3 bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
