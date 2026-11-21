import { brands } from "../data";
import { useReveal } from "../hooks/useReveal";

const loop = [...brands, ...brands];

export default function Brands() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="overflow-hidden bg-ink py-16 lg:py-20"
      aria-label="Buzz Box celebrations"
    >
      <div className={`px-5 text-center ${visible ? "reveal is-visible" : "reveal"}`}>
        <div className="mx-auto section-line mb-5" />
        <h2 className="font-serif text-[32px] font-medium tracking-[0.7px] text-paper capitalize md:text-[36px]">
          Wedding, corporate and birthday
        </h2>
      </div>
      <div className="marquee-fade mt-12 overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-10 pr-10">
          {loop.map((label, index) => (
            <span
              key={`${label}-${index}`}
              className="rounded-full border border-white/10 px-5 py-2 text-sm font-medium tracking-[0.18em] text-mist uppercase transition hover:border-gold/50 hover:text-gold"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
