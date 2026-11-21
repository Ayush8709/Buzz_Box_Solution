import { useEffect, useState } from "react";
import { reviews } from "../data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % reviews.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="bg-[#0c0e11] px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-[1100px] items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="font-serif text-4xl leading-tight font-medium md:text-5xl">
            What Our Satisfied
            <br /> Clients Say About Us
          </h2>
          <p className="mt-6 text-sm text-mist">
            <span className="mr-2 text-gold" aria-hidden="true">
              ★★★★☆
            </span>
            Rated 4.2/5 stars on Google!
          </p>
        </div>
        <div>
          <blockquote className="font-serif text-xl leading-relaxed text-paper md:text-2xl">
            “{review.quote}”
          </blockquote>
          <p className="mt-8 text-base font-medium text-paper">{review.name}</p>
          <p className="mt-1 text-sm text-gold">{review.role}</p>
          <button
            type="button"
            className="mt-8 text-sm tracking-[0.2em] text-mist hover:text-gold"
            onClick={() => setIndex((value) => (value + 1) % reviews.length)}
            aria-label="Next testimonial"
          >
            {index + 1} / {reviews.length}
          </button>
        </div>
      </div>
    </section>
  );
}
