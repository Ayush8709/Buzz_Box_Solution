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

    gsap.to(".hero-parallax", {
      yPercent: 12,
      ease: "none",
      scrollTrigger: {
        trigger: root.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
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
    <section id="top" ref={root} className="relative h-[100svh] min-h-[700px] overflow-hidden bg-ink">
      <div className="hero-parallax absolute inset-0 scale-110 will-change-transform">
        {heroSlides.map((src, slide) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out ${
              slide === index % heroSlides.length ? "opacity-100 kenburns" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink to-transparent" />

      <div className="absolute inset-x-0 bottom-10 z-10 mx-auto max-w-[1240px] px-5 sm:bottom-14 lg:bottom-20 lg:px-8">
        <h1 className="sr-only">Buzz Box Events and Solutions</h1>
        <div className="hero-line section-line mb-5" />
        <p className="hero-title font-serif text-[36px] leading-[1.05] font-extrabold tracking-[0.2px] text-paper capitalize sm:text-[56px] lg:text-[68px]">
          <span className="text-gold">Unique Idea</span> And Great Vision
        </p>
        <p
          className="hero-word mt-1 overflow-hidden font-serif text-[36px] leading-[1.05] font-extrabold tracking-[0.2px] text-paper capitalize sm:text-[56px] lg:text-[68px]"
          aria-live="polite"
        >
          <span key={words[index]} className="hero-word-inner inline-block">
            {words[index]}
          </span>
        </p>
        <p className="hero-copy mt-5 max-w-xl text-[15px] font-medium leading-[1.7] text-mist sm:text-base">
          Buzz Box Events and Solutions. Wedding planner, corporate events, and birthday decor. Booking open for 26–27.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="hero-cta btn-glow inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-[15px] font-bold text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-[#e8c09a]"
          >
            Book Now <span aria-hidden="true">↗</span>
          </a>
          <a
            href="#services"
            className="hero-cta inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-[15px] font-medium text-paper backdrop-blur-sm transition duration-300 hover:border-gold hover:text-gold"
          >
            Explore Services
          </a>
          <a
            href="tel:+918789081553"
            className="hero-cta inline-flex items-center gap-2 px-2 text-[15px] font-medium text-mist transition hover:text-gold"
          >
            8789081553
          </a>
        </div>
        <a
          href="#milestones"
          className="hero-scroll float-y mt-8 inline-flex text-paper/70 transition hover:text-gold"
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
            className={`hero-dot h-1.5 rounded-full transition-all duration-500 ${
              slide === index % heroSlides.length ? "w-9 bg-gold" : "w-3 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
