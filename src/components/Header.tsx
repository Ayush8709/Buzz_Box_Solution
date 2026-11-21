import { useEffect, useState } from "react";
import { nav } from "../data";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid || open
          ? "border-b border-white/5 bg-ink/80 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "bg-gradient-to-b from-black/55 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between gap-6 px-5 lg:px-8">
        <a href="#top" className="group shrink-0 leading-none" aria-label="Buzz Box home">
          <span className="block font-serif text-[22px] tracking-[0.16em] text-gold transition duration-300 group-hover:tracking-[0.22em]">
            BUZZ BOX
          </span>
          <span className="mt-1 block text-[11px] font-medium tracking-[0.28em] text-mist">
            EVENTS &amp; SOLUTIONS
          </span>
        </a>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`block h-px w-6 bg-paper transition duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-paper transition duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-paper transition duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>

        <nav
          aria-label="Menu"
          className={`${
            open ? "flex" : "hidden"
          } absolute inset-x-0 top-[76px] flex-col gap-1 border-b border-white/5 bg-ink/95 px-5 py-5 backdrop-blur-xl lg:static lg:flex lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none`}
        >
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                className="nav-link flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-paper/90 transition hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {item.label}
                {item.items ? (
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    aria-hidden="true"
                    className="opacity-70 transition duration-300 group-hover:translate-y-0.5"
                  >
                    <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                ) : null}
              </a>
              {item.items ? (
                <div className="invisible absolute top-full left-0 z-20 min-w-52 translate-y-2 flex-col overflow-hidden rounded-xl border border-white/8 bg-panel/95 py-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 max-lg:static max-lg:visible max-lg:mt-1 max-lg:flex max-lg:translate-y-0 max-lg:opacity-100 max-lg:shadow-none lg:flex">
                  {item.items.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="px-4 py-2.5 text-[13px] text-mist transition hover:bg-white/5 hover:pl-5 hover:text-gold"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <a
            href="#contact"
            className="btn-glow mt-3 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-[15px] font-bold tracking-[-0.3px] text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-[#e8c09a] lg:mt-0 lg:ml-4"
            onClick={() => setOpen(false)}
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
