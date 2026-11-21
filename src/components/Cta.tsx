export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-panel px-5 py-24 lg:px-8">
      <img
        src="/images/map.webp"
        alt=""
        className="pointer-events-none absolute top-1/2 right-6 hidden h-64 w-64 -translate-y-1/2 object-contain opacity-30 lg:block"
      />
      <div className="relative mx-auto max-w-[1240px]">
        <h2 className="font-serif text-5xl leading-[0.95] font-medium md:text-6xl">
          Ready To Plan
          <br /> Your Next Event?
        </h2>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-3 rounded bg-gold px-6 py-3 text-[15px] font-medium text-ink hover:bg-[#e8c09a]"
        >
          Let’s Talk <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
