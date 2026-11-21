import { useRef } from "react";
import { reasons } from "../data";
import { useGsapContext } from "../hooks/useGsapContext";
import { reveal } from "../lib/animate";

export default function Why() {
  const root = useRef<HTMLElement>(null);

  useGsapContext(root, (gsap) => {
    reveal(gsap, ".why-media", {
      x: -40,
      y: 0,
      duration: 0.9,
      scrollTrigger: { trigger: root.current, start: "top 75%" },
    });
    reveal(gsap, ".why-copy > *", {
      x: 28,
      y: 0,
      duration: 0.75,
      stagger: 0.08,
      scrollTrigger: { trigger: root.current, start: "top 75%" },
    });
    reveal(gsap, ".why-item", {
      y: 22,
      duration: 0.6,
      stagger: 0.08,
      scrollTrigger: { trigger: ".why-list", start: "top 85%" },
    });
    gsap.to(".why-img", {
      yPercent: 6,
      ease: "none",
      scrollTrigger: {
        trigger: root.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="about" ref={root} className="bg-ink px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="why-media relative min-h-[440px] overflow-hidden rounded-[28px] lg:min-h-[600px]">
          <img
            src="/images/hd/why.jpg"
            alt="Event decor by Buzz Box"
            className="why-img absolute inset-0 h-[115%] w-full object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
            <p className="text-xs tracking-[0.2em] text-gold uppercase">Buzz Box</p>
            <p className="mt-2 text-lg font-medium text-paper">Unique idea. Great vision.</p>
          </div>
        </div>

        <div className="why-copy">
          <div className="section-line mb-5" />
          <h2 className="font-serif text-[34px] font-medium tracking-[0.7px] text-paper capitalize md:text-[44px]">
            Why Choose Buzz Box?
          </h2>
          <div className="why-list mt-8 space-y-1">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className="why-item group rounded-2xl border border-transparent px-4 py-5 transition duration-300 hover:border-white/8 hover:bg-white/[0.03]"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 text-xs text-gold transition group-hover:bg-gold group-hover:text-ink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[20px] font-medium tracking-[-0.4px] text-paper md:text-[22px]">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-[1.75] font-medium tracking-[0.2px] text-mist">
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
