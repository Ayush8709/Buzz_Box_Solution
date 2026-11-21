import { useEffect, useRef, useState } from "react";
import { work, type CaseStudy } from "../data";
import { useGsapContext } from "../hooks/useGsapContext";
import { getGsap } from "../lib/gsap";
import { reveal } from "../lib/animate";

export default function Work() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState<CaseStudy | null>(null);
  const topRow = work.slice(0, 3);
  const bottomRow = work.slice(3);

  useGsapContext(root, (gsap) => {
    reveal(gsap, ".work-head > *", {
      y: 28,
      duration: 0.7,
      stagger: 0.08,
      scrollTrigger: { trigger: root.current, start: "top 78%" },
    });
    reveal(gsap, ".work-card", {
      y: 40,
      duration: 0.8,
      stagger: 0.08,
      scrollTrigger: { trigger: ".work-grid", start: "top 82%" },
    });
  }, []);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const { gsap } = getGsap();
      gsap.from(".work-modal-panel", {
        y: 28,
        duration: 0.4,
        ease: "power3.out",
        clearProps: "transform",
      });
    }

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  const renderCard = (item: CaseStudy, index: number) => (
    <button
      key={item.title}
      type="button"
      onClick={() => setActive(item)}
      className="work-card group flex w-full max-w-[400px] flex-col text-left"
    >
      <div className="relative overflow-hidden rounded-[4px]">
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt=""
            className="bg-photo h-full w-full object-cover transition duration-[900ms] ease-out group-hover:scale-105"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 border border-white/15 transition duration-300 group-hover:border-gold/50" />
        <span className="absolute right-3 bottom-3 rounded-sm bg-ink/80 px-2.5 py-1 text-[11px] tracking-[0.16em] text-gold uppercase backdrop-blur-sm">
          0{index + 1} / 0{work.length}
        </span>
      </div>

      <div className="mt-4 flex flex-1 flex-col border-t border-white/10 pt-4">
        <p className="text-[11px] tracking-[0.2em] text-gold uppercase">{item.kind}</p>
        <h3 className="mt-2 font-serif text-[24px] leading-[1.15] font-medium tracking-[0.3px] text-paper transition group-hover:text-gold sm:text-[26px]">
          {item.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-mist">{item.place}</p>
        <span className="mt-5 inline-flex w-fit items-center gap-2 border border-white/20 px-4 py-2 text-[12px] tracking-[0.14em] text-paper uppercase transition duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
          View details
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </button>
  );

  return (
    <section id="work" ref={root} className="bg-[#0c0e11] px-4 py-16 sm:px-5 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="work-head flex flex-col items-center text-center">
          <div className="section-line mb-5" />
          <h2 className="font-serif text-[28px] font-medium tracking-[0.7px] text-paper capitalize sm:text-[34px] md:text-[44px]">
            Our Work
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-[1.7] text-mist sm:text-base">
            Selected celebrations — open any card for the full story.
            Each project shows how Buzz Box turns one idea into a complete setup: wedding, haldi, birthday, engagement, and more.
          </p>
        </div>

        <div className="work-grid mt-12 space-y-10 sm:mt-16">
          <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-7 lg:gap-y-10">
            {topRow.map((item, index) => renderCard(item, index))}
          </div>
          {bottomRow.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-8 lg:gap-7">
              {bottomRow.map((item, index) => renderCard(item, index + 3))}
            </div>
          ) : null}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/75 p-3 backdrop-blur-md sm:items-center sm:p-4"
          onClick={() => setActive(null)}
        >
          <article
            className="work-modal-panel max-h-[90svh] w-full max-w-2xl overflow-y-auto rounded-[22px] border border-white/10 bg-panel p-5 shadow-2xl sm:rounded-[28px] sm:p-6 md:p-9"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs tracking-[0.16em] text-gold uppercase">
                {active.kind} | {active.place}
              </p>
              <button
                type="button"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-xl leading-none text-mist transition hover:border-gold hover:text-paper"
                onClick={() => setActive(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <h3 className="mt-3 font-serif text-[26px] font-medium tracking-[0.7px] text-paper sm:text-[32px]">
              {active.title}
            </h3>
            <img src={active.image} alt="" className="bg-photo mt-5 h-44 w-full rounded-2xl object-cover sm:h-56" />
            <dl className="mt-6 space-y-5 text-base leading-[1.7] font-medium text-mist">
              <div>
                <dt className="font-medium text-gold">Objective</dt>
                <dd className="mt-1">{active.objective}</dd>
              </div>
              <div>
                <dt className="font-medium text-gold">Buzz Box Work</dt>
                <dd className="mt-1">{active.work}</dd>
              </div>
              <div>
                <dt className="font-medium text-gold">Success</dt>
                <dd className="mt-1">{active.success}</dd>
              </div>
              <div>
                <dt className="font-medium text-gold">Key Highlight</dt>
                <dd className="mt-1">{active.highlight}</dd>
              </div>
            </dl>
          </article>
        </div>
      ) : null}
    </section>
  );
}
