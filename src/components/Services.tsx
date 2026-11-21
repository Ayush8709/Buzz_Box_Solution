import { useRef } from "react";
import { services } from "../data";
import { useGsapContext } from "../hooks/useGsapContext";
import { reveal } from "../lib/animate";

export default function Services() {
  const root = useRef<HTMLElement>(null);
  const topRow = services.slice(0, 3);
  const bottomRow = services.slice(3);

  useGsapContext(root, (gsap) => {
    reveal(gsap, ".svc-head > *", {
      y: 28,
      duration: 0.7,
      stagger: 0.08,
      scrollTrigger: { trigger: root.current, start: "top 78%" },
    });
    reveal(gsap, ".svc-card", {
      y: 40,
      duration: 0.8,
      stagger: 0.08,
      scrollTrigger: { trigger: ".svc-grid", start: "top 82%" },
    });
  }, []);

  const renderCard = (service: (typeof services)[number], index: number) => (
    <a
      key={service.title}
      href="#contact"
      className="svc-card group relative flex w-full max-w-[400px] flex-col overflow-hidden rounded-[22px] border border-white/10 bg-panel/80 shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_24px_60px_rgba(236,192,147,0.12)]"
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <img
          src={service.image}
          alt=""
          className="bg-photo h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[11px] tracking-[0.18em] text-paper/90 uppercase backdrop-blur-md">
          0{index + 1}
        </span>
      </div>

      <div className="flex flex-1 flex-col bg-panel px-5 pt-5 pb-6 sm:px-6 sm:pt-6 sm:pb-7">
        <span className="inline-flex w-fit items-center gap-3 rounded-full bg-gold py-2.5 pr-2 pl-5 text-[13px] font-bold tracking-[0.1em] text-ink uppercase shadow-[0_8px_24px_rgba(236,192,147,0.35)] transition duration-300 group-hover:bg-[#f0d0ae]">
          {service.title}
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-paper transition duration-300 group-hover:translate-x-0.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>

        <p className="mt-5 text-[11px] tracking-[0.22em] text-gold uppercase">Book now</p>

        <ul className="mt-3 space-y-2.5 text-[15px] font-medium text-paper/95">
          {service.points.map((point) => (
            <li key={point} className="flex items-center gap-3">
              <span className="h-px w-4 shrink-0 bg-gold/80" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );

  return (
    <section id="services" ref={root} className="relative overflow-hidden bg-ink px-4 py-16 sm:px-5 sm:py-24 lg:px-8 lg:py-32">
      <div className="ambient right-0 top-20 h-72 w-72 bg-gold/16" />
      <div className="ambient ambient-delay -left-20 bottom-10 h-64 w-64 bg-gold/10" />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="svc-head flex flex-col items-center text-center">
          <div className="section-line mb-5" />
          <h2 className="font-serif text-[30px] font-medium tracking-[0.7px] text-paper sm:text-[40px] md:text-[48px]">
            What We Do
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-[1.7] text-mist sm:text-base md:text-[17px]">
            Decor and planning for weddings, corporate evenings, birthdays, and celebrations in between.
            From stage and florals to seating and backdrops, every setup is shaped around your date, mood, and room.
          </p>
        </div>

        <div className="svc-grid mt-12 space-y-6 sm:mt-16 sm:space-y-7">
          <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topRow.map((service, index) => renderCard(service, index))}
          </div>
          {bottomRow.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-6">
              {bottomRow.map((service, index) => renderCard(service, index + 3))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
