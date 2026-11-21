import { useRef } from "react";
import { stats } from "../data";
import { useGsapContext } from "../hooks/useGsapContext";
import { reveal } from "../lib/animate";

export default function Milestones() {
  const root = useRef<HTMLElement>(null);

  useGsapContext(root, (gsap) => {
    gsap.fromTo(
      ".ms-line",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 78%", once: true },
      },
    );
    reveal(gsap, ".ms-title", {
      y: 28,
      duration: 0.7,
      scrollTrigger: { trigger: root.current, start: "top 78%" },
    });
    reveal(gsap, ".ms-item", {
      y: 36,
      duration: 0.75,
      stagger: 0.1,
      scrollTrigger: { trigger: ".ms-grid", start: "top 82%" },
    });
    gsap.to(".ms-bg", {
      scale: 1.08,
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
    <section id="milestones" ref={root} className="relative mt-10 overflow-hidden px-4 py-10 sm:mt-14 sm:px-5 sm:py-14 lg:mt-16 lg:px-8 lg:py-16">
      <img
        src="/images/hd/milestones.jpg"
        alt=""
        className="ms-bg bg-photo absolute inset-0 h-full w-full object-cover object-center will-change-transform"
      />
      <div className="absolute inset-0 bg-[#07090b]/62" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/10 to-ink/55" />

      <div className="relative mx-auto max-w-[1100px]">
        <div className="flex flex-col items-center">
          <div className="ms-line section-line mb-3" />
          <h2 className="ms-title text-center font-serif text-[26px] font-medium tracking-[0.7px] text-paper capitalize sm:text-[32px] md:text-[38px]">
            Our Celebrations
          </h2>
        </div>

        <div className="ms-grid mt-6 grid grid-cols-2 gap-x-2 gap-y-5 sm:mt-8 sm:gap-y-6 md:grid-cols-4 md:gap-y-0">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className={`ms-item text-center ${index > 0 ? "md:border-l md:border-gold/35" : ""}`}
            >
              <div className="mx-auto max-w-[210px] rounded-2xl px-2 py-2 transition duration-500 hover:-translate-y-1 hover:bg-white/5 sm:px-3 sm:py-3">
                <p className="font-display text-[24px] font-normal tracking-[0.3px] text-paper sm:text-[32px] md:text-[40px]">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs font-medium tracking-wide text-mist sm:mt-2 sm:text-sm">{stat.label}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="ms-item mt-6 text-center text-sm tracking-wide text-mist sm:mt-8">
          Booking open for 26–27 ·{" "}
          <a className="text-gold transition hover:underline" href="tel:+918789081553">
            8789081553
          </a>
        </p>
      </div>
    </section>
  );
}
