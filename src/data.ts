export const nav = [
  {
    label: "About Us",
    href: "#about",
    items: [
      { label: "Our Team", href: "#about" },
      { label: "Our Journey", href: "#milestones" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    label: "Services",
    href: "#services",
    items: [
      { label: "Corporate Events", href: "#services" },
      { label: "Exhibitions", href: "#services" },
      { label: "Digital Marketing", href: "#services" },
    ],
  },
  {
    label: "CWE Originals",
    href: "#services",
    items: [
      { label: "India Kids Fashion Week", href: "#services" },
      { label: "Women Fun Fest", href: "#services" },
    ],
  },
  { label: "Portfolio", href: "#work" },
  {
    label: "Contact",
    href: "#contact",
    items: [
      { label: "Contact Us", href: "#contact" },
      { label: "Careers", href: "#contact" },
    ],
  },
];

export const words = ["Events", "Exhibitions", "Fashion Shows", "Fun Fests"];

export const stats = [
  { value: 100, label: "Cities Across India" },
  { value: 200, label: "Corporate Clients Served" },
  { value: 2000, label: "Events executed" },
  { value: 23, label: "Years of Industry Excellence" },
];

export const reviews = [
  {
    quote:
      "As a Qatar-based company, our India launch was our first event, and finding the right partner was crucial. Craftworld did a fantastic job, from finding the perfect venue to conceptualising, designing, and executing the event. Their professionalism, commitment, and understanding made our first India experience smooth and memorable.",
    name: "Ronnie Daniel",
    role: "Doha Insurance | Product Launch",
  },
  {
    quote:
      "We have known Craftworld for a long time. Their biggest strength is stall design, integrating technology and creating engaging experience centres in expo. What sets them apart is that they don’t just design concepts; they deliver them seamlessly across India and international markets like Dubai and Singapore, maintaining quality and execution standards. Keep it up.",
    name: "Ruchi",
    role: "Mitsui (MOL) | Marketing",
  },
  {
    quote:
      "Wiz was looking for an experienced event management company with a pan-India presence to execute five consecutive city events while maintaining consistent standards. Craftworld delivered exactly what we expected, managing everything from venue selection and logistics to stage production, sound, and lighting, ensuring seamless execution and consistent quality across all five cities.",
    name: "Lauren Ginter",
    role: "WIZ | Marketing APJ",
  },
  {
    quote:
      "Managing MICE events across 10 cities requires precision and coordination. Craftworld has been a reliable partner in delivering seamless experiences.",
    name: "Santosh Upadhyay",
    role: "Vice President, BFIL | MICE",
  },
  {
    quote:
      "Craftworld has been managing our exhibition stalls for several years, ensuring consistent quality, professional execution and dependable support every time.",
    name: "Mayur Shinde",
    role: "Fristam | Exhibition Stall Management",
  },
  {
    quote:
      "Craftworld successfully managed our conferences across 20 cities back-to-back, demonstrating exceptional coordination, commitment and operational excellence.",
    name: "Manish Oberoi",
    role: "Aditya Birla Group | Conference | 20 Cities",
  },
  {
    quote:
      "Craftworld delivered a memorable Diwali event with excellent planning, coordination and execution, creating an engaging experience for everyone.",
    name: "Siddharth Jain",
    role: "Nayara Energy | Marketing",
  },
];

export const services = [
  {
    title: "Events",
    image: "/images/svc-events.webp",
    points: ["Experiential Events", "Live Performances", "Brand Experiences"],
  },
  {
    title: "Exhibitions",
    image: "/images/svc-exhibitions.webp",
    points: ["Exhibition Design", "Stall Fabrication", "Brand Displays"],
  },
  {
    title: "IKFW",
    image: "/images/svc-ikfw.webp",
    points: ["Kids Runway", "Designer Showcase", "Star Showstoppers"],
  },
  {
    title: "Women's Funfest",
    image: "/images/svc-women.webp",
    points: ["Women-only Escape", "5-Star Stay", "Celebrity Guests"],
  },
  {
    title: "Digital Marketing",
    image: "/images/svc-digital.webp",
    points: ["Performance Marketing", "SEO & Analytics", "Conversion Growth"],
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
    title: "Doha Insurance Group",
    kind: "Corporate Event",
    place: "Mumbai",
    image: "/images/work-doha.webp",
    objective:
      "Create a premium and engaging event experience focused on guest engagement and networking, while successfully launching the brand’s product in India.",
    work: "Concept & planning, venue setup, stage production, branding, entertainment and complete event execution.",
    success:
      "Successfully executed the event with a seamless guest experience, strong audience engagement and positive client feedback.",
    highlight:
      "A complete event experience combining impactful production, branding, entertainment, networking and the India launch of their product.",
  },
  {
    title: "WIZ – Multi-City Event",
    kind: "Corporate Networking Event",
    place: "Mumbai, Hyderabad & Delhi",
    image: "/images/work-wiz.webp",
    objective:
      "Strengthen relationships and create meaningful networking opportunities for an international client across its three key Indian locations — Mumbai, Hyderabad and Delhi.",
    work: "Concept & planning, venue setup, stage production, branding, entertainment and complete event execution.",
    success:
      "Successfully executed the event series across Mumbai, Hyderabad and Delhi with 300+ guests, ensuring a seamless and consistent experience across all locations.",
    highlight:
      "A seamless multi-city networking experience delivered across three locations, bringing together 300+ guests with end-to-end event management.",
  },
  {
    title: "BFIL – MICE Event",
    kind: "Corporate R&R Event",
    place: "Amritsar",
    image: "/images/work-bfil.webp",
    objective:
      "Recognise and reward the top-performing sales team members who achieved their business targets, while creating an engaging platform for networking, celebration and team bonding.",
    work: "End-to-end planning and execution, including destination and venue suggestions, hotel sourcing, rooming, transportation, guest management, entertainment, the reward ceremony, sightseeing and on-ground coordination.",
    success:
      "Successfully delivered a seamless 3-day, 2-night incentive experience, managing the complete guest journey from arrival and check-in to the award celebration and checkout.",
    highlight:
      "A complete achievers’ experience combining recognition, rewards, entertainment, networking and destination experiences.",
  },
  {
    title: "WesterCap – MICE",
    kind: "International MICE & Incentive Event",
    place: "Thailand",
    image: "/images/work-wester.webp",
    objective:
      "Create a premium international incentive experience for 150+ guests, combining business recognition, networking, team engagement and immersive destination experiences in Thailand.",
    work: "End-to-end planning and execution, including concept, domestic and international airfare, transfers, hotel stay, venue selection, sightseeing, event production, the award function, gifting and on-ground coordination.",
    success:
      "Successfully managed a seamless 5-day, 4-night international MICE experience for 150+ guests, coordinating travel, accommodation, events and guest logistics.",
    highlight:
      "A fully managed international MICE journey combining travel logistics, premium accommodation, award celebrations and curated sightseeing.",
  },
];

export const brands = [
  "nayara.webp",
  "mi.webp",
  "lupin.webp",
  "samsung.webp",
  "resso.webp",
  "bisleri.png",
  "birla.webp",
  "ivycap.webp",
  "pg.webp",
  "indianoil.webp",
  "sumitomo.webp",
  "tata.webp",
  "teradata.webp",
  "maruti.webp",
  "sbi.webp",
];

export const reasons = [
  {
    title: "Built Around You",
    body: "We take the time to understand your brand, audience, and objectives before shaping the experience.",
  },
  {
    title: "Flexible by Design",
    body: "No two brands are the same. Our approach adapts to what your event and audience actually need.",
  },
  {
    title: "Experiences That Connect",
    body: "We create experiences designed to engage audiences, build meaningful connections, and strengthen brand loyalty.",
  },
  {
    title: "Strategy Meets Execution",
    body: "From the first idea to the final execution, we bring creativity, planning, and production together under one roof.",
  },
  {
    title: "Proven Through Our Own IPs",
    body: "Our experience goes beyond client work, with successful properties such as India Kids Fashion Week and Chef’s Connect.",
  },
];

export const posts = [
  "Top 6 Qualities Of Event Management Companies in Delhi & Gurgaon",
  "5 Outstanding Ways To Make Your Event Attendees Happy & Interested",
  "5 Essential Creatives To Make Your Exhibition Stand A Star Attraction At A Trade Fair",
];
