import { useState } from "react";
import { work, type CaseStudy } from "../data";

export default function Work() {
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="bg-[#0c0e11] px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="font-serif text-4xl font-medium md:text-5xl">Our Work</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {work.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(item)}
              className="group relative min-h-[360px] overflow-hidden text-left"
            >
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="relative flex h-full min-h-[360px] flex-col justify-end p-5">
                <p className="text-[11px] tracking-[0.16em] text-gold uppercase">{item.kind}</p>
                <h3 className="mt-2 font-serif text-2xl leading-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-paper/80">{item.place}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-4 sm:items-center"
          onClick={() => setActive(null)}
        >
          <article
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto bg-panel p-6 md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs tracking-[0.16em] text-gold uppercase">
                {active.kind} | {active.place}
              </p>
              <button type="button" className="text-2xl leading-none text-mist hover:text-paper" onClick={() => setActive(null)} aria-label="Close">
                ×
              </button>
            </div>
            <h3 className="mt-3 font-serif text-3xl">{active.title}</h3>
            <img src={active.image} alt="" className="mt-5 h-52 w-full object-cover" />
            <dl className="mt-6 space-y-4 text-sm leading-relaxed text-paper/90">
              <div>
                <dt className="font-medium text-gold">Objective</dt>
                <dd className="mt-1">{active.objective}</dd>
              </div>
              <div>
                <dt className="font-medium text-gold">Craftworld Work</dt>
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
