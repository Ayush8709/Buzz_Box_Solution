import { useRef } from "react";
import { brands } from "../data";
import { useGsapContext } from "../hooks/useGsapContext";
import { reveal } from "../lib/animate";

const loop = [...brands, ...brands];

export default function Brands() {
  const root = useRef<HTMLElement>(null);

  useGsapContext(root, (gsap) => {
    reveal(gsap, ".br-head > *", {
      y: 24,
      duration: 0.65,
      stagger: 0.08,
      scrollTrigger: { trigger: root.current, start: "top 82%" },
    });
  }, []);

  return (
    <section ref={root} className="overflow-hidden bg-ink py-14 sm:py-20 lg:py-24" aria-label="Buzz Box celebrations">
      <div className="br-head px-4 text-center sm:px-5">
        <div className="mx-auto section-line mb-5" />
        <h2 className="font-serif text-[26px] font-medium tracking-[0.7px] text-paper capitalize sm:text-[32px] md:text-[38px]">
          Wedding, corporate and birthday
        </h2>
      </div>
      <div className="marquee-fade mt-8 overflow-hidden sm:mt-12">
        <div className="marquee-track flex w-max items-center gap-3 pr-3 sm:gap-4 sm:pr-4">
          {loop.map((label, index) => (
            <span
              key={`${label}-${index}`}
              className="rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.16em] text-paper/85 uppercase transition hover:border-gold hover:text-gold sm:px-6 sm:py-2.5 sm:text-sm sm:tracking-[0.18em]"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
