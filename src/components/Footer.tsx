import { useRef } from "react";
import { posts } from "../data";
import { useGsapContext } from "../hooks/useGsapContext";
import { reveal } from "../lib/animate";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/events_by_buzzbox/",
    className:
      "bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] shadow-[0_0_18px_rgba(221,42,123,0.35)]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
        <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9zm9.75 1.45a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3zM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6zm0 1.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=918789081553",
    className: "bg-[#25D366] shadow-[0_0_18px_rgba(37,211,102,0.4)]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.41-.14-.95-.33-1.63-.64-2.87-1.24-4.74-4.13-4.88-4.32-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.27.64-.39 1.02-.39.12 0 .23 0 .33.01.3.01.44.03.64.5.24.58.82 2 .89 2.15.07.14.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.28-.12.54.16.27.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.21 1.37.27.14.43.12.59-.07.16-.19.68-.79.86-1.06.18-.27.36-.22.6-.13.24.09 1.54.73 1.8.86.27.13.44.2.51.31.06.11.06.64-.18 1.32z" />
      </svg>
    ),
  },
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
        className="bg-photo pointer-events-none absolute inset-x-0 bottom-0 h-56 w-full object-cover opacity-35"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/70" />

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
                className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition duration-300 hover:-translate-y-0.5 hover:brightness-110 ${social.className}`}
              >
                {social.icon}
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
