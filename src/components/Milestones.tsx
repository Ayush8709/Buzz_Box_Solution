import { stats } from "../data";
import { useReveal } from "../hooks/useReveal";

const delays = ["reveal-delay-1", "reveal-delay-2", "reveal-delay-3", "reveal-delay-4"];

export default function Milestones() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section id="milestones" ref={ref} className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-28">
      <img
        src="/images/hd/milestones.jpg"
        alt=""
        className={`absolute inset-0 h-full w-full object-cover object-center transition duration-[1800ms] ${
          visible ? "scale-100 opacity-100" : "scale-110 opacity-70"
        }`}
      />
      <div className="absolute inset-0 bg-[#090b0d]/74" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/50" />

      <div className="relative mx-auto max-w-[1100px]">
        <div className={`flex flex-col items-center ${visible ? "reveal is-visible" : "reveal"}`}>
          <div className="section-line mb-5" />
          <h2 className="text-center font-serif text-[32px] font-medium tracking-[0.7px] text-paper capitalize md:text-[40px]">
            Our Celebrations
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-12">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className={`${visible ? "reveal is-visible" : "reveal"} ${delays[index] ?? ""} text-center ${
                index > 0 ? "md:border-l md:border-gold/40" : ""
              }`}
            >
              <div className="mx-auto max-w-[200px] rounded-2xl px-3 py-4 transition duration-500 hover:-translate-y-1 hover:bg-white/5">
                <p className="font-display text-[40px] font-normal tracking-[0.3px] text-paper sm:text-[52px]">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-medium tracking-wide text-mist sm:text-base">{stat.label}</p>
              </div>
            </article>
          ))}
        </div>

        <p
          className={`mt-14 text-center text-sm tracking-wide text-mist ${
            visible ? "reveal is-visible reveal-delay-5" : "reveal"
          }`}
        >
          Booking open for 26–27 ·{" "}
          <a className="text-gold transition hover:underline" href="tel:+918789081553">
            8789081553
          </a>
        </p>
      </div>
    </section>
  );
}
