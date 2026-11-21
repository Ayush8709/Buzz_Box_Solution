import type gsap from "gsap";

type RevealVars = {
  y?: number;
  x?: number;
  duration?: number;
  stagger?: gsap.NumberValue | gsap.StaggerVars;
  ease?: string;
  delay?: number;
  scrollTrigger?: gsap.DOMTarget | object | null;
};

/** Safe scroll reveal — text stays in place until scrolled, then animates and clears. */
export function reveal(
  gsapApi: typeof gsap,
  targets: gsap.TweenTarget,
  vars: RevealVars = {},
) {
  const {
    y = 40,
    x = 0,
    duration = 0.8,
    stagger,
    ease = "power3.out",
    delay,
    scrollTrigger,
  } = vars;

  let trigger: object | undefined;
  if (scrollTrigger != null) {
    if (typeof scrollTrigger === "object" && ("start" in scrollTrigger || "trigger" in scrollTrigger)) {
      trigger = { ...scrollTrigger, once: true };
    } else {
      trigger = { trigger: scrollTrigger, once: true };
    }
  }

  return gsapApi.fromTo(
    targets,
    { y, x },
    {
      y: 0,
      x: 0,
      duration,
      stagger,
      ease,
      delay,
      immediateRender: false,
      clearProps: "transform",
      scrollTrigger: trigger,
    },
  );
}
