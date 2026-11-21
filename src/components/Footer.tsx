import { posts } from "../data";

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/people/Craftworld-Events-Pvt-Ltd/100057361003447/", mark: "f" },
  { label: "Linkedin", href: "https://www.linkedin.com/company/craftworld-events-pvt-ltd/", mark: "in" },
  { label: "Youtube", href: "https://www.youtube.com/@craftworldeventsofficial12/", mark: "▶" },
  { label: "Instagram", href: "https://www.instagram.com/craftworldevents_official/", mark: "◎" },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-ink text-mist">
      <img
        src="/images/footer-bg.webp"
        alt=""
        className="pointer-events-none absolute inset-x-0 bottom-0 h-48 w-full object-cover opacity-20"
      />
      <div className="relative mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <img src="/images/logo.webp" alt="Craftworld" className="h-10 w-auto" />
          <p className="mt-5 text-sm leading-relaxed">
            The leading corporate event management company operating nationally from Mumbai, Delhi, Bangalore, Gurgaon, Pune and other cities in India.
          </p>
          <p className="mt-6 text-sm font-bold tracking-wide text-paper">Our Socials</p>
          <div className="mt-3 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs text-paper hover:border-gold hover:text-gold"
              >
                {social.mark}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide text-paper">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a className="hover:text-gold" href="#about">About Us</a></li>
            <li><a className="hover:text-gold" href="#services">Services</a></li>
            <li><a className="hover:text-gold" href="#services">CWE Originals</a></li>
            <li><a className="hover:text-gold" href="#work">Portfolio</a></li>
            <li><a className="hover:text-gold" href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide text-paper">Contact Information</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed">
            <li>
              <a
                href="https://maps.google.com/?q=VIP+Plaza+Veera+Desai+Andheri+West+Mumbai"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold"
              >
                Office No. 001, Ground floor, Bldg. B/7, VIP Plaza, New Link Rd, behind Crystal Plaza, Veera Desai Industrial Estate, Andheri West, Mumbai, Maharashtra - 400053.
              </a>
            </li>
            <li>
              <a href="mailto:info@craftworldevents.com" className="hover:text-gold">
                Email: info@craftworldevents.com
              </a>
            </li>
            <li>
              <a href="tel:+919820344426" className="hover:text-gold">
                Call us now: +91 98203 44426
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold tracking-wide text-paper">Locations</h2>
          <img
            src="/images/map.webp"
            alt="Map of India showing Mumbai, Delhi, Pune, Chennai, Gurgaon and Bangalore"
            className="mt-4 w-44"
          />
        </div>
      </div>

      <div id="blog" className="relative mx-auto max-w-[1240px] px-5 pb-10 lg:px-8">
        <h2 className="text-sm font-bold tracking-wide text-paper">Recent Blog Posts</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {posts.map((post) => (
            <li key={post}>
              <a href="#blog" className="hover:text-gold">
                {post}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative bg-panel">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-2 px-5 py-4 text-xs text-mist md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 Craftworld Events Management Company | All Rights Reserved.</p>
          <p>
            <a href="#contact" className="hover:text-gold">Event Company Mumbai</a>
            {" | "}
            <a href="#contact" className="hover:text-gold">Event Company Delhi</a>
            {" | "}
            <a href="#contact" className="hover:text-gold">Event Company Pune</a>
            {" | "}
            <a href="#contact" className="hover:text-gold">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
