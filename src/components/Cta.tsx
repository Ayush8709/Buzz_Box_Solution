import { useReveal } from "../hooks/useReveal";

export default function Cta() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden bg-panel px-5 py-24 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(223,173,125,0.12),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(223,173,125,0.08),transparent_35%)]" />
      <img
        src="/images/map.webp"
        alt=""
        className={`pointer-events-none absolute top-1/2 right-6 hidden h-72 w-72 -translate-y-1/2 object-contain opacity-25 transition duration-[1400ms] lg:block ${
          visible ? "translate-x-0 opacity-25" : "translate-x-8 opacity-0"
        }`}
      />
      <div className="relative mx-auto max-w-[1240px]">
        <div className={visible ? "reveal is-visible" : "reveal"}>
          <div className="section-line mb-6" />
          <h2 className="font-serif text-[44px] leading-[1.15] font-medium tracking-[0.3px] text-paper sm:text-[60px] lg:text-[68px]">
            Booking Open
            <br /> For 26–27
          </h2>
          <p className="mt-5 max-w-lg text-base text-mist">
            Tell us the date, the mood, and the room. We’ll build the celebration from there.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="tel:+918789081553"
              className="btn-glow inline-flex items-center gap-3 rounded-full bg-gold px-7 py-3.5 text-base font-bold tracking-[-0.3px] text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-[#e8c09a]"
            >
              Call 8789081553 <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.instagram.com/events_by_buzzbox/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-base font-medium text-paper transition duration-300 hover:border-gold hover:text-gold"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
