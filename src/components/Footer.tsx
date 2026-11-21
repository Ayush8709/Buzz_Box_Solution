import { useRef } from "react";
import { posts } from "../data";
import { useGsapContext } from "../hooks/useGsapContext";
import { reveal } from "../lib/animate";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/events_by_buzzbox/", mark: "◎" },
];

export default function Footer() {
  const root = useRef<HTMLElement>(null);

  useGsapContext(root, (gsap) => {
    reveal(gsap, ".ft-col", {
      y: 24,
      duration: 0.7,
      stagger: 0.08,
      scrollTrigger: { trigger: root.current, start: "top 88%" },
    });
  }, []);

  return (
    <footer id="contact" ref={root} className="relative overflow-hidden bg-ink text-mist">
      <img
        src="/images/hd/footer.jpg"
        alt=""
        className="pointer-events-none absolute inset-x-0 bottom-0 h-56 w-full object-cover opacity-15"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink" />

      <div className="relative mx-auto grid max-w-[1240px] gap-10 px-4 py-14 sm:gap-12 sm:px-5 sm:py-20 md:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-24">
        <div className="ft-col">
          <p className="font-serif text-[22px] font-medium tracking-[0.7px] text-gold">BUZZ BOX</p>
          <p className="mt-1 text-sm font-medium tracking-[0.3px] text-mist">EVENTS &amp; SOLUTIONS</p>
          <p className="mt-5 text-base leading-[1.75] font-medium text-mist">
            Unique idea and great vision. Wedding planner, corporate events, and birthday decor. Booking open for 26–27.
          </p>
          <p className="mt-6 text-base font-bold tracking-[-0.5px] text-paper">Our Socials</p>
          <div className="mt-3 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs text-paper transition duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                {social.mark}
              </a>
            ))}
          </div>
        </div>

        <div className="ft-col">
          <h2 className="text-base font-bold tracking-[-0.5px] text-paper">Quick Links</h2>
          <ul className="mt-4 space-y-2.5 text-base font-medium text-mist">
            <li><a className="transition hover:text-gold" href="#about">About Us</a></li>
            <li><a className="transition hover:text-gold" href="#services">Services</a></li>
            <li><a className="transition hover:text-gold" href="#services">Decor</a></li>
            <li><a className="transition hover:text-gold" href="#work">Portfolio</a></li>
            <li><a className="transition hover:text-gold" href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="ft-col">
          <h2 className="text-base font-bold tracking-[-0.5px] text-paper">Contact Information</h2>
          <ul className="mt-4 space-y-3 text-base leading-[1.75] font-medium text-mist">
            <li>Booking open for 26–27</li>
            <li>
              <a href="tel:+918789081553" className="transition hover:text-gold">
                Call us now: 8789081553
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/events_by_buzzbox/"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-gold"
              >
                Instagram: @events_by_buzzbox
              </a>
            </li>
          </ul>
        </div>

        <div className="ft-col">
          <h2 className="text-base font-bold tracking-[-0.5px] text-paper">Decor</h2>
          <ul className="mt-4 space-y-2.5 text-base font-medium text-mist">
            <li>Anniversary Decor</li>
            <li>Haldi Mehendi</li>
            <li>Engagement Decor</li>
            <li>Reception Decor</li>
          </ul>
        </div>
      </div>

      <div id="blog" className="ft-col relative mx-auto max-w-[1240px] px-4 pb-10 sm:px-5 sm:pb-12 lg:px-8">
        <h2 className="text-base font-bold tracking-[-0.5px] text-paper">Highlights</h2>
        <ul className="mt-4 space-y-2 text-base font-medium text-mist">
          {posts.map((post) => (
            <li key={post}>
              <a href="#blog" className="transition hover:text-gold">
                {post}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative border-t border-white/5 bg-panel/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-3 px-4 py-4 text-xs leading-relaxed text-mist sm:px-5 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Buzz Box Events &amp; Solutions | All Rights Reserved.</p>
          <p className="flex flex-wrap gap-x-2 gap-y-1">
            <a href="#services" className="transition hover:text-gold">Wedding Planner</a>
            <span aria-hidden="true">|</span>
            <a href="#services" className="transition hover:text-gold">Corporate Event</a>
            <span aria-hidden="true">|</span>
            <a href="#services" className="transition hover:text-gold">Birthday Decor</a>
            <span aria-hidden="true">|</span>
            <a
              href="https://www.instagram.com/events_by_buzzbox/"
              className="transition hover:text-gold"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
