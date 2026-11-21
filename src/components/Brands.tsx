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
    <section ref={root} className="overflow-hidden bg-ink py-20 lg:py-24" aria-label="Buzz Box celebrations">
      <div className="br-head px-5 text-center">
        <div className="mx-auto section-line mb-5" />
        <h2 className="font-serif text-[32px] font-medium tracking-[0.7px] text-paper capitalize md:text-[38px]">
          Wedding, corporate and birthday
        </h2>
      </div>
      <div className="marquee-fade mt-12 overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-4 pr-4">
          {loop.map((label, index) => (
            <span
              key={`${label}-${index}`}
              className="rounded-full border border-white/10 bg-white/[0.02] px-6 py-2.5 text-sm font-medium tracking-[0.18em] text-mist uppercase transition hover:border-gold/50 hover:text-gold"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
