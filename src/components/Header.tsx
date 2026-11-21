import { useEffect, useRef, useState } from "react";
import { nav } from "../data";
import { useGsapContext } from "../hooks/useGsapContext";

export default function Header() {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      if (!hero) {
        setSolid(window.scrollY > 40);
        return;
      }
      const headerH = root.current?.offsetHeight ?? 62;
      setSolid(hero.getBoundingClientRect().bottom <= headerH);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      setExpanded(null);
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
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
  const toggleMenu = () => setOpen((value) => !value);

  return (
    <header
      ref={root}
      className={`fixed inset-x-0 top-0 z-[200] transition-all duration-300 ${
        open || solid
          ? "border-b border-white/10 bg-ink shadow-[0_8px_28px_rgba(0,0,0,0.35)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="relative z-[220] mx-auto flex h-[56px] max-w-[1240px] items-center justify-between gap-4 px-4 sm:h-[62px] sm:gap-6 sm:px-5 lg:px-8">
        <a
          href="#top"
          className="header-brand group min-w-0 shrink leading-none"
          aria-label="Buzz Box home"
          onClick={closeMenu}
        >
          <span className="text-glow block font-serif text-[18px] tracking-[0.14em] text-gold transition duration-300 group-hover:tracking-[0.2em] sm:text-[20px] sm:tracking-[0.16em]">
            BUZZ BOX
          </span>
          <span className="mt-0.5 block truncate text-[9px] font-medium tracking-[0.2em] text-mist sm:text-[10px] sm:tracking-[0.24em]">
            EVENTS &amp; SOLUTIONS
          </span>
        </a>

        <button
          type="button"
          className="relative z-[230] flex h-11 w-11 shrink-0 touch-manipulation flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            toggleMenu();
          }}
        >
          <span
            className={`block h-0.5 w-5 rounded-full bg-paper transition duration-300 ${
              open ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-paper transition duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-paper transition duration-300 ${
              open ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>

        {/* Desktop nav */}
        <nav
          aria-label="Menu"
          className="hidden lg:flex lg:flex-row lg:items-center lg:gap-1"
        >
          {nav.map((item) => (
            <div key={item.label} className="header-nav-item group relative">
              {item.items ? (
                <>
                  <a
                    href={item.href}
                    className="nav-link flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-paper transition hover:text-gold"
                  >
                    {item.label}
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      aria-hidden="true"
                      className="ml-1 opacity-70 transition duration-300 group-hover:translate-y-0.5"
                    >
                      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </a>
                  <div className="invisible absolute top-full left-0 z-20 flex min-w-52 translate-y-2 flex-col rounded-2xl border border-white/8 bg-panel/95 py-2 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.items.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="px-4 py-2.5 text-[13px] text-mist transition hover:bg-white/5 hover:pl-5 hover:text-gold"
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
                  className="nav-link flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-paper transition hover:text-gold"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
          <a
            href="#contact"
            className="header-nav-item btn-glow ml-4 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-[15px] font-bold tracking-[-0.3px] text-ink transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0d0ae]"
          >
            Book Now
          </a>
        </nav>
      </div>

      {/* Mobile full-screen menu */}
      <nav
        id="mobile-nav"
        aria-label="Mobile menu"
        className={`fixed inset-0 z-[210] flex h-svh w-full flex-col bg-ink px-5 pt-[72px] pb-8 transition duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain">
          {nav.map((item) => {
            const isOpen = expanded === item.label;
            return (
              <div key={item.label} className="border-b border-white/8">
                {item.items ? (
                  <>
                    <div className="flex items-center">
                      <a
                        href={item.href}
                        className="flex flex-1 items-center px-1 py-4 text-[20px] font-medium text-paper transition hover:text-gold"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </a>
                      <button
                        type="button"
                        className="flex h-12 w-12 items-center justify-center text-mist"
                        aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.label}`}
                        aria-expanded={isOpen}
                        onClick={() => setExpanded(isOpen ? null : item.label)}
                      >
                        <svg
                          width="12"
                          height="8"
                          viewBox="0 0 10 6"
                          aria-hidden="true"
                          className={`transition duration-300 ${isOpen ? "rotate-180" : ""}`}
                        >
                          <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
                        </svg>
                      </button>
                    </div>
                    <div className={`${isOpen ? "flex" : "hidden"} flex-col gap-1 pb-4 pl-3`}>
                      {item.items.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="px-2 py-2.5 text-[15px] text-mist transition hover:text-gold"
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
                    className="flex items-center px-1 py-4 text-[20px] font-medium text-paper transition hover:text-gold"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <a
          href="#contact"
          className="btn-glow mt-4 inline-flex w-full items-center justify-center rounded-full bg-gold px-5 py-3.5 text-[16px] font-bold tracking-[-0.3px] text-ink transition duration-300 hover:bg-[#f0d0ae]"
          onClick={closeMenu}
        >
          Book Now
        </a>
      </nav>
    </header>
  );
}
