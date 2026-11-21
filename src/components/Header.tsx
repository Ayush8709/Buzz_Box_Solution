import { useEffect, useRef, useState } from "react";
import { nav } from "../data";
import { useGsapContext } from "../hooks/useGsapContext";

export default function Header() {
  const root = useRef<HTMLElement>(null);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) {
      setExpanded(null);
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useGsapContext(root, (gsap) => {
    gsap.from(".header-brand", {
      y: -10,
      duration: 0.6,
      ease: "power3.out",
      clearProps: "transform",
    });
    if (window.matchMedia("(min-width: 1024px)").matches) {
      gsap.from(".header-nav-item", {
        y: -8,
        duration: 0.5,
        stagger: 0.04,
        ease: "power3.out",
        delay: 0.08,
        clearProps: "transform",
      });
    }
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      ref={root}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        open
          ? "border-b border-white/5 bg-ink"
          : solid
            ? "border-b border-white/5 bg-ink/80 shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
            : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[70px] max-w-[1240px] items-center justify-between gap-4 px-4 sm:h-[78px] sm:gap-6 sm:px-5 lg:px-8">
        <a href="#top" className="header-brand group min-w-0 shrink leading-none" aria-label="Buzz Box home" onClick={closeMenu}>
          <span className="block font-serif text-[20px] tracking-[0.14em] text-gold transition duration-300 group-hover:tracking-[0.2em] sm:text-[22px] sm:tracking-[0.16em]">
            BUZZ BOX
          </span>
          <span className="mt-1 block truncate text-[10px] font-medium tracking-[0.22em] text-mist sm:text-[11px] sm:tracking-[0.28em]">
            EVENTS &amp; SOLUTIONS
          </span>
        </a>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
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
          } absolute inset-x-0 top-[70px] max-h-[calc(100svh-70px)] flex-col gap-0.5 overflow-y-auto overscroll-contain border-b border-white/5 bg-ink px-4 py-4 sm:top-[78px] sm:max-h-[calc(100svh-78px)] sm:px-5 sm:py-5 lg:static lg:flex lg:max-h-none lg:flex-row lg:items-center lg:gap-1 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0`}
        >
          {nav.map((item) => {
            const isOpen = expanded === item.label;
            return (
              <div key={item.label} className="header-nav-item group relative">
                {item.items ? (
                  <>
                    <div className="flex items-center lg:block">
                      <a
                        href={item.href}
                        className="nav-link flex flex-1 items-center gap-1 px-3 py-2.5 text-[15px] font-medium text-paper/90 transition hover:text-gold lg:py-2"
                        onClick={closeMenu}
                      >
                        {item.label}
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          aria-hidden="true"
                          className="ml-1 hidden opacity-70 transition duration-300 group-hover:translate-y-0.5 lg:inline"
                        >
                          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
                        </svg>
                      </a>
                      <button
                        type="button"
                        className="flex h-10 w-10 items-center justify-center text-mist lg:hidden"
                        aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label}`}
                        aria-expanded={isOpen}
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                      >
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          aria-hidden="true"
                          className={`transition duration-300 ${isOpen ? "rotate-180" : ""}`}
                        >
                          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`${
                        isOpen ? "flex" : "hidden"
                      } flex-col overflow-hidden rounded-2xl border border-white/8 bg-panel/80 py-1.5 lg:invisible lg:absolute lg:top-full lg:left-0 lg:z-20 lg:flex lg:min-w-52 lg:translate-y-2 lg:border lg:bg-panel/95 lg:py-2 lg:opacity-0 lg:shadow-2xl lg:backdrop-blur-xl lg:transition-all lg:duration-300 lg:group-hover:visible lg:group-hover:translate-y-0 lg:group-hover:opacity-100`}
                    >
                      {item.items.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="px-4 py-2.5 text-[13px] text-mist transition hover:bg-white/5 hover:pl-5 hover:text-gold"
                          onClick={closeMenu}
                          {...(child.href.startsWith("http")
                            ? { target: "_blank", rel: "noreferrer" }
                            : {})}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="nav-link flex items-center gap-1 px-3 py-2.5 text-[15px] font-medium text-paper/90 transition hover:text-gold lg:py-2"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            );
          })}
          <a
            href="#contact"
            className="header-nav-item btn-glow mt-3 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-[15px] font-bold tracking-[-0.3px] text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-[#e8c09a] lg:mt-0 lg:ml-4"
            onClick={closeMenu}
          >
            Book Now
          </a>
        </nav>
      </div>
    </header>
  );
}
