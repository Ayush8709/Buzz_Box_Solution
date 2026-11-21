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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || open ? "bg-ink/95 backdrop-blur-md" : "bg-black/25"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-6 px-5 lg:px-8">
        <a href="#top" className="shrink-0" aria-label="Craftworld home">
          <img
            src="/images/logo.webp"
            alt="Craftworld Events and Exhibitions"
            className="h-9 w-auto md:h-11"
          />
        </a>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`block h-px w-6 bg-paper transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-paper transition ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-paper transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>

        <nav
          aria-label="Menu"
          className={`${
            open ? "flex" : "hidden"
          } absolute inset-x-0 top-[72px] flex-col gap-1 bg-ink px-5 py-4 lg:static lg:flex lg:flex-row lg:items-center lg:gap-1 lg:bg-transparent lg:p-0`}
        >
          {nav.map((item) => (
            <div key={item.label} className="group relative">
              <a
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 text-[14px] text-paper/90 hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {item.label}
                {item.items ? (
                  <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true" className="opacity-70">
                    <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                ) : null}
              </a>
              {item.items ? (
                <div className="hidden min-w-52 flex-col bg-panel py-2 shadow-xl max-lg:flex lg:absolute lg:top-full lg:left-0 lg:group-hover:flex">
                  {item.items.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="px-4 py-2 text-[13px] text-mist hover:bg-white/5 hover:text-gold"
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
            className="mt-2 inline-flex items-center justify-center rounded bg-gold px-4 py-2 text-[14px] font-medium text-ink hover:bg-[#e8c09a] lg:mt-0 lg:ml-3"
            onClick={() => setOpen(false)}
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
}
