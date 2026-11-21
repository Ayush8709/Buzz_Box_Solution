import { useEffect, useRef, useState } from "react";
import { stats } from "../data";

function useCount(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const duration = 1400;
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return value;
}

function Stat({ value, label, active }: { value: number; label: string; active: boolean }) {
  const current = useCount(value, active);
  return (
    <article className="text-center">
      <p className="font-serif text-5xl font-medium text-paper/90 md:text-6xl">
        {current}
        <span className="text-gold">+</span>
      </p>
      <p className="mt-3 text-[13px] tracking-wide text-mist">{label}</p>
    </article>
  );
}

export default function Milestones() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="milestones" ref={ref} className="bg-ink px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="text-center font-serif text-4xl font-medium md:text-5xl">Our Milestones</h2>
        <div className="mt-16 grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} active={active} />
          ))}
        </div>
        <p className="mt-14 text-center text-sm tracking-wide text-mist">
          <span className="mr-2 text-gold" aria-hidden="true">
            ★★★★☆
          </span>
          Rated 4.2/5 stars on Google!
        </p>
      </div>
    </section>
  );
}
