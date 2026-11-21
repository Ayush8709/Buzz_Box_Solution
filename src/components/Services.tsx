import { services } from "../data";

export default function Services() {
  return (
    <section id="services" className="bg-ink px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="font-serif text-4xl font-medium md:text-5xl">What We Do</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-6">
          {services.map((service, index) => (
            <a
              key={service.title}
              href="#contact"
              className={`group relative min-h-[340px] overflow-hidden md:min-h-[420px] ${
                index < 3 ? "md:col-span-2" : "md:col-span-3"
              }`}
            >
              <img
                src={service.image}
                alt=""
                className="kenburns absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
              <div className="relative flex h-full flex-col justify-end p-6 md:p-7">
                <h3 className="text-[22px] font-medium tracking-[0.14em] uppercase">{service.title}</h3>
                <ul className="mt-3 space-y-1 text-[14px] text-paper/85">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
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
