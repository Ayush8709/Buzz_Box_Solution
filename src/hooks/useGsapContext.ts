import { useEffect, useLayoutEffect, type DependencyList, type RefObject } from "react";
import { getGsap } from "../lib/gsap";

const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const CLEAR_SEL = [
  ".gsap-animate",
  ".hero-line",
  ".hero-title",
  ".hero-word",
  ".hero-copy",
  ".hero-cta",
  ".hero-scroll",
  ".hero-dot",
  ".header-brand",
  ".header-nav-item",
  ".ms-line",
  ".ms-title",
  ".ms-item",
  ".svc-head > *",
  ".svc-card",
  ".work-head > *",
  ".work-card",
  ".ts-left > *",
  ".ts-card",
  ".why-media",
  ".why-copy > *",
  ".why-item",
  ".cta-content > *",
  ".cta-orb",
  ".br-head > *",
  ".ft-col",
].join(",");

function clearInlineMotion(node: HTMLElement) {
  const { gsap } = getGsap();
  gsap.set(node.querySelectorAll(CLEAR_SEL), {
    clearProps: "transform,translate,opacity,visibility,filter",
  });
}

export function useGsapContext(
  scope: RefObject<HTMLElement | null>,
  setup: (
    gsap: typeof import("gsap").default,
    ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger,
  ) => void,
  deps: DependencyList = [],
) {
  useIsoLayoutEffect(() => {
    const node = scope.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { gsap, ScrollTrigger } = getGsap();
    let ctx: ReturnType<typeof gsap.context> | null = null;
    let cancelled = false;

    const frame = window.requestAnimationFrame(() => {
      if (cancelled || !scope.current) return;
      clearInlineMotion(scope.current);
      ctx = gsap.context(() => {
        setup(gsap, ScrollTrigger);
        ScrollTrigger.refresh();
      }, scope.current);
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(frame);
      ctx?.revert();
      clearInlineMotion(node);
    };
  }, deps);
}
