import { useEffect, useState } from "react";
import { reviews } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const review = reviews[index];
  const { ref, visible } = useReveal<HTMLElement>();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % reviews.length);
      setAnimKey((value) => value + 1);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  const go = (next: number) => {
    setIndex(next);
    setAnimKey((value) => value + 1);
  };

  return (
    <section id="testimonials" ref={ref} className="relative overflow-hidden bg-[#0c0e11] px-5 py-20 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div className={visible ? "reveal is-visible" : "reveal"}>
          <div className="section-line mb-5" />
          <h2 className="font-serif text-[40px] leading-[1.15] font-medium tracking-[0.7px] text-paper md:text-[46px]">
            Unique Idea
            <br /> And Great Vision
          </h2>
          <p className="mt-6 text-base font-medium text-gold">
            Wedding planner · Corporate event · Birthday decor
          </p>
        </div>

        <div className={`glass rounded-3xl p-7 md:p-9 ${visible ? "reveal is-visible reveal-delay-2" : "reveal"}`}>
          <blockquote
            key={animKey}
            className="word-in text-[17px] leading-[1.75] font-medium text-paper md:text-[18px]"
          >
            “{review.quote}”
          </blockquote>
          <div key={`meta-${animKey}`} className="word-in mt-8">
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
                  onClick={() => go(i)}
                  className={`h-1.5 rounded-full transition-all duration-400 ${
                    i === index ? "w-7 bg-gold" : "w-2.5 bg-white/25 hover:bg-white/45"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              className="text-sm tracking-[0.2em] text-mist transition hover:text-gold"
              onClick={() => go((index + 1) % reviews.length)}
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
