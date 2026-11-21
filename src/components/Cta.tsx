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
    <section ref={root} className="relative overflow-hidden bg-ink px-4 py-16 sm:px-5 sm:py-24 lg:px-8 lg:py-28">
      <div className="cta-orb ambient -left-10 top-10 h-80 w-80 bg-gold/25" />
      <div className="cta-orb ambient ambient-delay right-0 bottom-0 h-80 w-80 bg-gold/18" />

      <div className="relative mx-auto max-w-[1240px]">
        <div className="cta-content relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-panel via-[#12161b] to-ink p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-10 md:grid md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-8 md:p-12 lg:gap-10 lg:p-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(236,192,147,0.12),transparent_55%)]" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl md:h-[28rem] md:w-[28rem]" />

          <div className="relative z-[1] max-w-2xl">
            <p className="text-[12px] tracking-[0.22em] text-gold uppercase">Buzz Box Events &amp; Solutions</p>
            <div className="section-line mt-4 mb-5 sm:mb-6" />
            <h2 className="font-serif text-[40px] leading-[1.08] font-medium tracking-[0.3px] text-paper sm:text-[64px] lg:text-[76px]">
              Booking Open
              <br />
              <span className="text-gold text-glow-soft">For 26–27</span>
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-[1.75] text-mist sm:mt-6 sm:text-base md:text-[17px]">
              Tell us the date, the mood, and the room. We’ll build the celebration from there —
              wedding, corporate, birthday, haldi, engagement, or anniversary.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8">
              {["Wedding Planner", "Corporate Event", "Birthday Decor"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[11px] tracking-[0.12em] text-paper/85 uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="tel:+918789081553"
                className="btn-glow inline-flex items-center justify-center gap-3 rounded-full bg-gold px-7 py-3.5 text-[15px] font-bold tracking-[-0.3px] text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0d0ae] sm:px-8 sm:py-4 sm:text-base"
              >
                Call 8789081553 <span aria-hidden="true">↗</span>
              </a>
              <a
                href="https://www.instagram.com/events_by_buzzbox/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-[15px] font-medium text-paper backdrop-blur-sm transition duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold sm:px-8 sm:py-4 sm:text-base"
              >
                Instagram
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=918789081553"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-7 py-3.5 text-[15px] font-medium text-[#7dffb0] transition duration-300 hover:border-[#25D366] hover:bg-[#25D366]/20 sm:px-8 sm:py-4 sm:text-base"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative z-[1] mt-10 flex justify-center md:mt-0 md:justify-end">
            <div className="relative">
              <div className="absolute inset-6 rounded-full bg-gold/20 blur-2xl" />
              <div className="absolute inset-0 rounded-full border border-gold/20" />
              <div className="absolute inset-4 rounded-full border border-dashed border-gold/30" />
              <img
                src="/images/map.webp"
                alt="Service map"
                className="cta-map float-y relative z-[1] h-52 w-52 object-contain drop-shadow-[0_20px_50px_rgba(236,192,147,0.35)] brightness-110 contrast-110 saturate-125 sm:h-64 sm:w-64 lg:h-80 lg:w-80"
              />
              <span className="absolute top-1/2 left-1/2 z-[2] flex h-4 w-4 -translate-x-1/2 -translate-y-1/2">
                <span className="absolute inset-0 animate-ping rounded-full bg-gold/60" />
                <span className="relative m-auto h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_12px_rgba(236,192,147,0.9)]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
