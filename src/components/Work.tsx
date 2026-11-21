import { useEffect, useState } from "react";
import { work, type CaseStudy } from "../data";
import { useReveal } from "../hooks/useReveal";

const delays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-4"];

export default function Work() {
  const [active, setActive] = useState<CaseStudy | null>(null);
  const { ref, visible } = useReveal<HTMLElement>();

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="work" ref={ref} className="bg-[#0c0e11] px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className={visible ? "reveal is-visible" : "reveal"}>
          <div className="section-line mb-5" />
          <h2 className="font-serif text-[32px] font-medium tracking-[0.7px] text-paper capitalize md:text-[40px]">
            Our Work
          </h2>
          <p className="mt-3 max-w-xl text-base text-mist">
            Selected celebrations — open any card for the full story.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {work.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(item)}
              className={`media-card group relative min-h-[380px] overflow-hidden rounded-2xl text-left ${
                visible ? "reveal is-visible" : "reveal"
              } ${delays[index] ?? ""}`}
            >
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="relative z-[2] flex h-full min-h-[380px] flex-col justify-end p-5">
                <p className="text-sm font-medium tracking-[0.3px] text-mist transition group-hover:text-gold">
                  {item.kind}
                </p>
                <h3 className="mt-2 text-[22px] font-medium tracking-[-0.4px] text-paper transition duration-500 group-hover:translate-y-[-2px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-base font-medium text-mist">{item.place}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-gold opacity-0 transition duration-500 group-hover:opacity-100">
                  View details <span aria-hidden="true">→</span>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="modal-backdrop fixed inset-0 z-[60] flex items-end justify-center bg-black/75 p-4 backdrop-blur-sm sm:items-center"
          onClick={() => setActive(null)}
        >
          <article
            className="modal-panel max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-panel p-6 shadow-2xl md:p-8"
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
            <img
              src={active.image}
              alt=""
              className="mt-5 h-56 w-full rounded-2xl object-cover"
            />
            <dl className="mt-6 space-y-5 text-base leading-[1.65] font-medium text-mist">
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
