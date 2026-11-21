import { brands } from "../data";

const loop = [...brands, ...brands];

export default function Brands() {
  return (
    <section className="overflow-hidden bg-ink py-16" aria-label="Trusted by 200+ brands">
      <h2 className="px-5 text-center font-serif text-3xl font-medium md:text-4xl">Trusted by 200+ brands</h2>
      <div className="mt-10 overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-14 pr-14">
          {loop.map((file, index) => (
            <img
              key={`${file}-${index}`}
              src={`/images/brands/${file}`}
              alt=""
              className="h-12 w-auto max-w-[140px] object-contain brightness-0 invert opacity-80"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
