import { useRef } from "react";
import { brands } from "../data";
import { useGsapContext } from "../hooks/useGsapContext";
import { reveal } from "../lib/animate";

const brandStyles: Record<string, string> = {
  "Wedding Planner":
    "border-[#7eb6ff]/45 bg-[#1a4b8c]/35 text-[#9ec9ff] shadow-[0_0_24px_rgba(126,182,255,0.18)]",
  "Corporate Event":
    "border-[#5fd4c8]/45 bg-[#0f5c55]/35 text-[#8ef0e4] shadow-[0_0_24px_rgba(95,212,200,0.18)]",
  "Birthday Decor":
    "border-[#ff9a5a]/50 bg-[#8a3d12]/35 text-[#ffc29a] shadow-[0_0_24px_rgba(255,154,90,0.2)]",
  "Haldi Mehendi":
    "border-[#f0d24a]/50 bg-[#6b5a0c]/35 text-[#ffe680] shadow-[0_0_24px_rgba(240,210,74,0.2)]",
  "Carnival Haldi":
    "border-[#ff6b8a]/50 bg-[#7a1f3a]/35 text-[#ffb0c0] shadow-[0_0_24px_rgba(255,107,138,0.2)]",
  "Engagement Decor":
    "border-[#c9a0ff]/50 bg-[#4a2a7a]/35 text-[#e0c6ff] shadow-[0_0_24px_rgba(201,160,255,0.2)]",
  "Reception Decor":
    "border-[#7dffa3]/45 bg-[#1a5c35]/35 text-[#b6ffcf] shadow-[0_0_24px_rgba(125,255,163,0.18)]",
  "Anniversary Decor":
    "border-gold/55 bg-gold/15 text-gold shadow-[0_0_24px_rgba(236,192,147,0.22)]",
};

const loop = [...brands, ...brands];

function BrandBadge({ label }: { label: string }) {
  const style = brandStyles[label] ?? "border-white/20 bg-white/5 text-paper";

  return (
    <div className="flex items-center justify-center px-2.5 sm:px-4">
      <span
        className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-[12px] font-bold tracking-[0.14em] uppercase backdrop-blur-sm transition duration-300 hover:brightness-125 sm:px-6 sm:py-3 sm:text-[13px] ${style}`}
      >
        {label}
      </span>
    </div>
  );
}

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
    <section
      ref={root}
      className="overflow-hidden bg-gradient-to-b from-ink via-[#0a0c0f] to-ink py-14 sm:py-20 lg:py-24"
      aria-label="Buzz Box celebrations"
    >
      <div className="br-head px-4 text-center sm:px-5">
        <div className="mx-auto section-line mb-5" />
        <h2 className="font-serif text-[26px] font-medium tracking-[0.7px] text-paper capitalize sm:text-[32px] md:text-[38px]">
          Wedding, corporate and birthday
        </h2>
      </div>

      <div className="marquee-fade relative mt-10 sm:mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-16 bg-gradient-to-r from-ink to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 bg-gradient-to-l from-ink to-transparent sm:w-24" />

        <div className="overflow-hidden py-3">
          <div className="marquee-track flex w-max items-center gap-1 pr-1 sm:gap-2 sm:pr-2">
            {loop.map((label, index) => (
              <BrandBadge key={`${label}-${index}`} label={label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
