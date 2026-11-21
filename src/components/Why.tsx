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
    <section id="about" ref={root} className="bg-ink px-4 py-16 sm:px-5 sm:py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-[1240px] items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="why-media relative min-h-[320px] overflow-hidden rounded-[22px] sm:min-h-[440px] sm:rounded-[28px] lg:min-h-[600px]">
          <img
            src="/images/hd/why.jpg"
            alt="Event decor by Buzz Box"
            className="why-img absolute inset-0 h-[115%] w-full object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4 sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
            <p className="text-xs tracking-[0.2em] text-gold uppercase">Buzz Box</p>
            <p className="mt-2 text-base font-medium text-paper sm:text-lg">Unique idea. Great vision.</p>
          </div>
        </div>

        <div className="why-copy">
          <div className="section-line mb-5" />
          <h2 className="font-serif text-[28px] font-medium tracking-[0.7px] text-paper capitalize sm:text-[34px] md:text-[44px]">
            Why Choose Buzz Box?
          </h2>
          <div className="why-list mt-6 space-y-1 sm:mt-8">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className="why-item group rounded-2xl border border-transparent px-2 py-4 transition duration-300 hover:border-white/8 hover:bg-white/[0.03] sm:px-4 sm:py-5"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/30 text-xs text-gold transition group-hover:bg-gold group-hover:text-ink sm:h-9 sm:w-9">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[18px] font-medium tracking-[-0.4px] text-paper sm:text-[20px] md:text-[22px]">
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
