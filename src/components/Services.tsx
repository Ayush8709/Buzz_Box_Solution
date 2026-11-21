import { useRef } from "react";
import { services } from "../data";
import { useGsapContext } from "../hooks/useGsapContext";
import { reveal } from "../lib/animate";

export default function Services() {
  const root = useRef<HTMLElement>(null);

  useGsapContext(root, (gsap) => {
    reveal(gsap, ".svc-head > *", {
      y: 28,
      duration: 0.7,
      stagger: 0.08,
      scrollTrigger: { trigger: root.current, start: "top 78%" },
    });
    reveal(gsap, ".svc-card", {
      y: 48,
      duration: 0.85,
      stagger: 0.08,
      scrollTrigger: { trigger: ".svc-grid", start: "top 80%" },
    });
  }, []);

  return (
    <section id="services" ref={root} className="relative bg-ink px-4 py-16 sm:px-5 sm:py-24 lg:px-8 lg:py-32">
      <div className="ambient right-0 top-20 h-64 w-64 bg-gold/8" />
      <div className="relative mx-auto max-w-[1240px]">
        <div className="svc-head">
          <div className="section-line mb-5" />
          <h2 className="font-serif text-[30px] font-medium tracking-[0.7px] text-paper sm:text-[40px] md:text-[48px]">
            What We Do
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-mist sm:text-base md:text-[17px]">
            Decor and planning for weddings, corporate evenings, birthdays, and celebrations in between.
          </p>
        </div>

        <div className="svc-grid mt-10 grid gap-3 sm:mt-14 sm:gap-4 md:grid-cols-6 md:gap-5">
          {services.map((service, index) => (
            <a
              key={service.title}
              href="#contact"
              className={`svc-card media-card group relative min-h-[280px] overflow-hidden rounded-[18px] sm:min-h-[360px] sm:rounded-[22px] md:min-h-[450px] ${
                index < 3 ? "md:col-span-2" : "md:col-span-3"
              }`}
            >
              <img src={service.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="relative z-[2] flex h-full flex-col justify-end p-5 sm:p-6 md:p-8">
                <p className="mb-2 text-xs tracking-[0.22em] text-gold uppercase">Book now</p>
                <h3 className="text-[20px] font-medium tracking-[-0.4px] text-paper uppercase sm:text-[22px] md:text-[24px]">
                  {service.title}
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm font-medium tracking-[0.2px] text-paper/95">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-px w-3 bg-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
