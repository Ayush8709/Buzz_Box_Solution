import { useEffect, useRef, useState } from "react";
import { work, type CaseStudy } from "../data";
import { useGsapContext } from "../hooks/useGsapContext";
import { getGsap } from "../lib/gsap";
import { reveal } from "../lib/animate";

export default function Work() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState<CaseStudy | null>(null);

  useGsapContext(root, (gsap) => {
    reveal(gsap, ".work-head > *", {
      y: 28,
      duration: 0.7,
      stagger: 0.08,
      scrollTrigger: { trigger: root.current, start: "top 78%" },
    });
    reveal(gsap, ".work-card", {
      y: 48,
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

  return (
    <section id="work" ref={root} className="bg-[#0c0e11] px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[1240px]">
        <div className="work-head">
          <div className="section-line mb-5" />
          <h2 className="font-serif text-[34px] font-medium tracking-[0.7px] text-paper capitalize md:text-[44px]">
            Our Work
          </h2>
          <p className="mt-3 max-w-xl text-base text-mist">
            Selected celebrations — open any card for the full story.
          </p>
        </div>

        <div className="work-grid mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {work.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(item)}
              className="work-card media-card group relative min-h-[400px] overflow-hidden rounded-[22px] text-left"
            >
              <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="relative z-[2] flex h-full min-h-[400px] flex-col justify-end p-6">
                <p className="text-sm font-medium tracking-[0.3px] text-mist">{item.kind}</p>
                <h3 className="mt-2 text-[22px] font-medium tracking-[-0.4px] text-paper">{item.title}</h3>
                <p className="mt-2 text-base font-medium text-mist">{item.place}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm text-gold">
                  View details <span aria-hidden="true">→</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/75 p-4 backdrop-blur-md sm:items-center"
          onClick={() => setActive(null)}
        >
          <article
            className="work-modal-panel max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-[28px] border border-white/10 bg-panel p-6 shadow-2xl md:p-9"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs tracking-[0.16em] text-gold uppercase">
                {active.kind} | {active.place}
              </p>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xl leading-none text-mist transition hover:border-gold hover:text-paper"
                onClick={() => setActive(null)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <h3 className="mt-3 font-serif text-[32px] font-medium tracking-[0.7px] text-paper">
              {active.title}
            </h3>
            <img src={active.image} alt="" className="mt-5 h-56 w-full rounded-2xl object-cover" />
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
