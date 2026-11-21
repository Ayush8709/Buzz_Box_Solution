export const nav = [
  {
    label: "About Us",
    href: "#about",
    items: [
      { label: "Our Idea", href: "#about" },
      { label: "Celebrations", href: "#milestones" },
      { label: "What We Plan", href: "#testimonials" },
      { label: "Highlights", href: "#blog" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    items: [
      { label: "Wedding Planner", href: "#services" },
      { label: "Corporate Event", href: "#services" },
      { label: "Birthday Decor", href: "#services" },
    ],
  },
  {
    label: "Decor",
    href: "#services",
    items: [
      { label: "Haldi Mehendi", href: "#services" },
      { label: "Engagement Decor", href: "#services" },
      { label: "Reception Decor", href: "#services" },
      { label: "Anniversary Decor", href: "#services" },
    ],
  },
  { label: "Portfolio", href: "#work" },
  {
    label: "Contact",
    href: "#contact",
    items: [
      { label: "Call Us", href: "tel:+918789081553" },
      { label: "Instagram", href: "https://www.instagram.com/events_by_buzzbox/" },
    ],
  },
];

export const words = [
  "Weddings",
  "Corporate Events",
  "Birthday Decor",
  "Haldi Mehendi",
  "Engagements",
];

export const heroSlides = [
  "/images/hd/hero-1.jpg",
  "/images/hd/hero-2.jpg",
  "/images/hd/hero-3.jpg",
];

export const stats = [
  { value: "Weddings", label: "Wedding planner" },
  { value: "Corporate", label: "Corporate events" },
  { value: "Birthdays", label: "Birthday decor" },
  { value: "26–27", label: "Booking open" },
];

export const reviews = [
  {
    quote:
      "A wedding planned around one idea: the aisle, the mandap, the haldi, and the reception all speaking the same language.",
    name: "Wedding Planner",
    role: "Buzz Box | Wedding Decor",
  },
  {
    quote:
      "Corporate evenings with a clear stage, a welcome that feels considered, and decor that keeps the brand in the room.",
    name: "Corporate Event",
    role: "Buzz Box | Corporate Decor",
  },
  {
    quote:
      "Birthday setups that feel personal. Balloons, florals, and a backdrop made for the person being celebrated.",
    name: "Birthday Decor",
    role: "Buzz Box | Birthday Decor",
  },
  {
    quote:
      "Haldi and mehendi in colour. Marigold, carnival canopies, and seating that keeps the ritual at the centre.",
    name: "Haldi Mehendi",
    role: "Buzz Box | Carnival Haldi",
  },
  {
    quote:
      "Engagement and reception decor with a floral arch, a lit aisle, and a stage the couple can actually stand in.",
    name: "Engagement & Reception",
    role: "Buzz Box | Reception Decor",
  },
  {
    quote:
      "Anniversary tables held with flowers, light, and a setting that feels like a private celebration, not a template.",
    name: "Anniversary Decor",
    role: "Buzz Box | Anniversary",
  },
];

export const services = [
  {
    title: "Weddings",
    image: "/images/hd/weddings.jpg",
    points: ["Wedding Planner", "Wedding Decor", "Reception Decor"],
  },
  {
    title: "Corporate",
    image: "/images/hd/corporate.jpg",
    points: ["Corporate Event", "Stage Setup", "Brand Decor"],
  },
  {
    title: "Birthdays",
    image: "/images/hd/birthday.jpg",
    points: ["Birthday Decor", "Theme Setups", "Celebration Backdrops"],
  },
  {
    title: "Haldi Mehendi",
    image: "/images/hd/haldi.jpg",
    points: ["Haldi Setup", "Mehendi Seating", "Carnival Haldi"],
  },
  {
    title: "Engagement",
    image: "/images/hd/engagement.jpg",
    points: ["Engagement Decor", "Anniversary Decor", "Floral Stages"],
  },
];

export type CaseStudy = {
  title: string;
  kind: string;
  place: string;
  image: string;
  objective: string;
  work: string;
  success: string;
  highlight: string;
};

export const work: CaseStudy[] = [
  {
    title: "Wedding Decor",
    kind: "Wedding Planner",
    place: "Booking open for 26–27",
    image: "/images/hd/work-wedding.jpg",
    objective:
      "Plan the wedding as one idea, from the first floral note to the reception stage.",
    work: "Wedding planning, mandap and aisle decor, stage florals, and the reception setting.",
    success:
      "A wedding day that reads as one celebration, with decor carrying the couple from ritual to reception.",
    highlight: "Wedding planner and wedding decor under the same roof.",
  },
  {
    title: "Haldi & Mehendi",
    kind: "Carnival Haldi",
    place: "Colour, florals, seating",
    image: "/images/hd/work-haldi.jpg",
    objective:
      "Give haldi and mehendi a setting that feels festive without losing the ritual.",
    work: "Carnival canopies, marigold styling, mehendi seating, and guest corners.",
    success:
      "A daytime celebration guests can sit in, photograph, and stay for.",
    highlight: "Haldi mehendi decor, including carnival haldi.",
  },
  {
    title: "Birthday Decor",
    kind: "Birthday Decor",
    place: "Theme setups",
    image: "/images/hd/work-birthday.jpg",
    objective:
      "Build a birthday around the person, not a stock theme pulled off a shelf.",
    work: "Backdrop, table styling, balloons or florals, and a photo corner.",
    success:
      "A room that feels made for that birthday, ready before the first guest walks in.",
    highlight: "Birthday decor planned as its own event.",
  },
  {
    title: "Engagement & Reception",
    kind: "Engagement Decor",
    place: "Reception & anniversary",
    image: "/images/hd/work-reception.jpg",
    objective:
      "Hold the engagement, reception, or anniversary with a stage and an aisle worth walking.",
    work: "Floral arches, lit aisles, reception stages, and anniversary tables.",
    success:
      "A night that feels dressed, from the entrance to the last table.",
    highlight: "Engagement decor, reception decor, and anniversary decor.",
  },
];

export const brands = [
  "Wedding Planner",
  "Corporate Event",
  "Birthday Decor",
  "Haldi Mehendi",
  "Carnival Haldi",
  "Engagement Decor",
  "Reception Decor",
  "Anniversary Decor",
];

export const reasons = [
  {
    title: "Unique Idea",
    body: "Every booking starts with an idea. The decor, the plan, and the room are built from that, not from a fixed package.",
  },
  {
    title: "Great Vision",
    body: "Buzz Box holds the picture of the day before the first flower arrives, then builds toward it.",
  },
  {
    title: "Wedding Planner",
    body: "Weddings are planned as a whole: haldi, mehendi, engagement, the ceremony, and the reception.",
  },
  {
    title: "Corporate Event",
    body: "Stages, welcomes, and brand decor for evenings that still need to feel hosted.",
  },
  {
    title: "Birthday Decor",
    body: "Birthday setups with a theme, a backdrop, and a table that belongs to the person being celebrated.",
  },
];

export const posts = [
  "Anniversary Decor",
  "Haldi Mehendi and Carnival Haldi",
  "Wedding Decor, Engagement Decor and Reception Decor",
];
