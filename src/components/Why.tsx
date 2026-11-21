import { reasons } from "../data";

export default function Why() {
  return (
    <section id="about" className="bg-ink px-5 py-20 lg:px-8">
      <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden">
          <img
            src="/images/hero-4.webp"
            alt="Stage production at a Craftworld awards night"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl font-medium md:text-4xl">Why Choose Craftworld Events?</h2>
          <div className="mt-8 space-y-6">
            {reasons.map((reason) => (
              <article key={reason.title} className="border-t border-white/10 pt-5">
                <h3 className="text-[22px] font-medium">{reason.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-mist">{reason.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
