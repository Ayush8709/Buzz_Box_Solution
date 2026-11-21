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
    <section id="milestones" ref={root} className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
      <img
        src="/images/hd/milestones.jpg"
        alt=""
        className="ms-bg absolute inset-0 h-full w-full object-cover object-center will-change-transform"
      />
      <div className="absolute inset-0 bg-[#090b0d]/76" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-transparent to-ink/60" />

      <div className="relative mx-auto max-w-[1100px]">
        <div className="flex flex-col items-center">
          <div className="ms-line section-line mb-5" />
          <h2 className="ms-title text-center font-serif text-[34px] font-medium tracking-[0.7px] text-paper capitalize md:text-[44px]">
            Our Celebrations
          </h2>
        </div>

        <div className="ms-grid mt-16 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-12">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className={`ms-item text-center ${index > 0 ? "md:border-l md:border-gold/35" : ""}`}
            >
              <div className="mx-auto max-w-[210px] rounded-2xl px-3 py-5 transition duration-500 hover:-translate-y-1.5 hover:bg-white/5">
                <p className="font-display text-[40px] font-normal tracking-[0.3px] text-paper sm:text-[54px]">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-medium tracking-wide text-mist sm:text-base">{stat.label}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="ms-item mt-14 text-center text-sm tracking-wide text-mist">
          Booking open for 26–27 ·{" "}
          <a className="text-gold transition hover:underline" href="tel:+918789081553">
            8789081553
          </a>
        </p>
      </div>
    </section>
  );
}
