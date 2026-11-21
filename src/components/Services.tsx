import { services } from "../data";
import { useReveal } from "../hooks/useReveal";

const delays = [
  "reveal-delay-1",
  "reveal-delay-2",
  "reveal-delay-3",
  "reveal-delay-4",
  "reveal-delay-5",
];

export default function Services() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section id="services" ref={ref} className="bg-ink px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className={visible ? "reveal is-visible" : "reveal"}>
          <div className="section-line mb-5" />
          <h2 className="font-serif text-[40px] font-medium tracking-[0.7px] text-paper md:text-[46px]">
            What We Do
          </h2>
          <p className="mt-3 max-w-xl text-base text-mist">
            Decor and planning for weddings, corporate evenings, birthdays, and celebrations in between.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-6">
          {services.map((service, index) => (
            <a
              key={service.title}
              href="#contact"
              className={`media-card group relative min-h-[340px] overflow-hidden rounded-2xl md:min-h-[430px] ${
                index < 3 ? "md:col-span-2" : "md:col-span-3"
              } ${visible ? "reveal is-visible" : "reveal"} ${delays[index] ?? ""}`}
            >
              <img
                src={service.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="relative z-[2] flex h-full flex-col justify-end p-6 md:p-7">
                <p className="mb-2 text-xs tracking-[0.22em] text-gold uppercase translate-y-2 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  Book now
                </p>
                <h3 className="text-[22px] font-medium tracking-[-0.4px] text-paper uppercase transition duration-500 group-hover:translate-x-1">
                  {service.title}
                </h3>
                <ul className="mt-3 space-y-1.5 text-sm font-medium tracking-[0.2px] text-paper">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <span className="h-px w-0 bg-gold transition-all duration-500 group-hover:w-3" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
