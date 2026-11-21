import { useRef } from "react";
import { useGsapContext } from "../hooks/useGsapContext";
import { reveal } from "../lib/animate";

export default function Cta() {
  const root = useRef<HTMLElement>(null);

  useGsapContext(root, (gsap) => {
    reveal(gsap, ".cta-content > *", {
      y: 28,
      duration: 0.75,
      stagger: 0.1,
      scrollTrigger: { trigger: root.current, start: "top 78%" },
    });
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-panel px-5 py-24 lg:px-8 lg:py-32">
      <div className="cta-orb ambient -left-10 top-10 h-80 w-80 bg-gold/15" />
      <div className="cta-orb ambient right-10 bottom-0 h-72 w-72 bg-gold/10" />
      <img
        src="/images/map.webp"
        alt=""
        className="pointer-events-none absolute top-1/2 right-6 hidden h-72 w-72 -translate-y-1/2 object-contain opacity-20 lg:block"
      />
      <div className="cta-content relative mx-auto max-w-[1240px]">
        <div className="section-line mb-6" />
        <h2 className="font-serif text-[46px] leading-[1.1] font-medium tracking-[0.3px] text-paper sm:text-[64px] lg:text-[74px]">
          Booking Open
          <br /> For 26–27
        </h2>
        <p className="mt-5 max-w-lg text-base text-mist md:text-[17px]">
          Tell us the date, the mood, and the room. We’ll build the celebration from there.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="tel:+918789081553"
            className="btn-glow inline-flex items-center gap-3 rounded-full bg-gold px-8 py-4 text-base font-bold tracking-[-0.3px] text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-[#e8c09a]"
          >
            Call 8789081553 <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://www.instagram.com/events_by_buzzbox/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-paper backdrop-blur-sm transition duration-300 hover:border-gold hover:text-gold"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
