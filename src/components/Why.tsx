import { reasons } from "../data";
import { useReveal } from "../hooks/useReveal";

const delays = [
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
  "reveal-delay-4",
  "reveal-delay-5",
];

export default function Why() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="bg-ink px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div
          className={`relative min-h-[420px] overflow-hidden rounded-3xl lg:min-h-[560px] ${
            visible ? "reveal is-visible" : "reveal"
          }`}
        >
          <img
            src="/images/hd/why.jpg"
            alt="Event decor by Buzz Box"
            className="absolute inset-0 h-full w-full object-cover transition duration-[1400ms] hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
            <p className="text-xs tracking-[0.2em] text-gold uppercase">Buzz Box</p>
            <p className="mt-2 text-lg font-medium text-paper">Unique idea. Great vision.</p>
          </div>
        </div>

        <div className={visible ? "reveal is-visible reveal-delay-2" : "reveal"}>
          <div className="section-line mb-5" />
          <h2 className="font-serif text-[32px] font-medium tracking-[0.7px] text-paper capitalize md:text-[40px]">
            Why Choose Buzz Box?
          </h2>
          <div className="mt-8 space-y-2">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className={`group rounded-2xl border border-transparent px-4 py-5 transition duration-300 hover:border-white/8 hover:bg-white/[0.03] ${
                  visible ? "reveal is-visible" : "reveal"
                } ${delays[index] ?? ""}`}
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 text-xs text-gold transition group-hover:bg-gold group-hover:text-ink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[20px] font-medium tracking-[-0.4px] text-paper md:text-[22px]">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.7] font-medium tracking-[0.2px] text-mist">
                      {reason.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
