import { useEffect, useRef, useState } from "react";
import { reviews } from "../data";
import { useGsapContext } from "../hooks/useGsapContext";
import { getGsap } from "../lib/gsap";
import { reveal } from "../lib/animate";

export default function Testimonials() {
  const root = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  useGsapContext(root, (gsap) => {
    reveal(gsap, ".ts-left > *", {
      x: -28,
      y: 0,
      duration: 0.75,
      stagger: 0.1,
      scrollTrigger: { trigger: root.current, start: "top 75%" },
    });
    reveal(gsap, ".ts-card", {
      x: 32,
      y: 0,
      duration: 0.8,
      scrollTrigger: { trigger: root.current, start: "top 75%" },
    });
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % reviews.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const { gsap } = getGsap();
    if (!quoteRef.current) return;
    gsap.fromTo(
      quoteRef.current,
      { y: 12 },
      { y: 0, duration: 0.45, ease: "power3.out", clearProps: "transform" },
    );
  }, [index]);

  return (
    <section
      id="testimonials"
      ref={root}
      className="noise relative overflow-hidden bg-[#0c0e11] px-4 py-16 sm:px-5 sm:py-24 lg:px-8 lg:py-32"
    >
      <div className="ambient -left-24 top-16 h-80 w-80 bg-gold/18" />
      <div className="ambient ambient-delay -right-20 bottom-0 h-80 w-80 bg-gold/12" />

      <div className="relative mx-auto grid max-w-[1100px] items-center gap-8 sm:gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="ts-left">
          <div className="section-line mb-5" />
          <h2 className="font-serif text-[30px] leading-[1.12] font-medium tracking-[0.7px] text-paper sm:text-[40px] md:text-[48px]">
            Unique Idea
            <br /> And Great Vision
          </h2>
          <p className="mt-4 text-sm font-medium text-gold sm:mt-6 sm:text-base">
            Wedding planner · Corporate event · Birthday decor
          </p>
        </div>

        <div className="ts-card glass rounded-[22px] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:rounded-[28px] sm:p-7 md:p-10">
          <blockquote ref={quoteRef} className="text-[15px] leading-[1.8] font-medium text-paper sm:text-[17px] md:text-[19px]">
            “{review.quote}”
          </blockquote>
          <div className="mt-8">
            <p className="text-base font-medium text-paper">{review.name}</p>
            <p className="mt-1 text-sm font-medium text-mist">{review.role}</p>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show review ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    i === index ? "w-8 bg-gold" : "w-2.5 bg-white/25 hover:bg-white/45"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              className="text-sm tracking-[0.2em] text-mist transition hover:text-gold"
              onClick={() => setIndex((value) => (value + 1) % reviews.length)}
              aria-label="Next testimonial"
            >
              {index + 1} / {reviews.length}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
