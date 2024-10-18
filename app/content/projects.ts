import { Project } from "~/types";

export const projects: Project[] = [
  {
    title: "Atomic Object",
    description:
      "I currently work as a software consultant and developer at Atomic Object. In this role, I work closely with clients to deliver high-quality custom software solutions. The projects I've worked on serve a range of industries, including retail, manufacturing, and supply chain management.",
    thumbnail: "/images/atomic-object.png",
    tags: [
      "typescript",
      "react",
      "postgresql",
      "cloud platforms",
      "node.js",
      "python",
      "swift",
    ],
    fullWidth: true,
    type: "external-link",
    url: "https://spin.atomicobject.com/author/jonathan-chaffer/",
    linkText: "View my Spin posts",
  },
  {
    title: "Story Soapbox",
    description:
      "Custom blog website built with Next.js and Builder.io. Features a custom component library that allows for easy content creation and editing.",
    thumbnail: "/images/story-soapbox.png",
    tags: ["next.js", "builder.io"],
    type: "external-link",
    url: "https://storysoapbox.com",
    linkText: "Check it out",
    fullWidth: true,
  },
  {
    title: "YASK",
    description:
      '"Yet Another Starter Kit." A back-end starter kit for full-stack apps. Dependency injection, code structure enforcement, and more.',
    type: "external-link",
    url: "https://github.com/jonathanchaffer/yask",
    linkText: "View on GitHub",
    tags: ["typescript", "node.js", "postgresql", "redis"],
    thumbnail: "/images/yask.png",
    fullWidth: true,
  },
  {
    title: "Organic Drawing",
    slug: "organic-drawing",
    description:
      "Generative art project that uses a hand-drawn aesthetic. Creates a unique piece on each run.",
    longDescription: `Generative art project that uses a hand-drawn aesthetic. Randomly selects one of several different drawing algorithms to create a unique piece each time. 
    \nReload the page to generate a new drawing; hit Enter to save a high-quality PNG of the current drawing.`,
    thumbnail: "/images/organic-drawing.png",
    tags: ["p5.js", "typescript"],
    type: "embed",
    embedUrl: "https://p5-organic-drawing.vercel.app/",
    linkText: "Try it yourself",
  },
  {
    title: "Crazygrid",
    slug: "crazygrid",
    description:
      "Generative art project that draws a grid (of grids, of grids). Creates a unique piece on each run.",
    longDescription: `Generative art project that draws a grid (of grids, of grids). Each recursive level generates its own color palette based on its parent, resulting in localized areas of similar color. Reload the page to generate a new drawing; hit Enter to save a high-quality PNG of the current drawing.`,
    thumbnail: "/images/crazygrid.png",
    tags: ["p5.js", "typescript"],
    type: "embed",
    embedUrl: "https://p5-crazygrid.vercel.app/",
    linkText: "Try it yourself",
  },
  {
    title: "Boerigter Center App",
    description:
      "My college capstone project was an app for Hope College's Boerigter Center for Calling and Career. It helps students explore career paths via an interactive map view.",
    thumbnail: "/images/boerigter-center.png",
    tags: ["typescript", "react"],
    type: "no-link",
  },
  {
    title: "SAC",
    description:
      "I served as the lead graphic designer for my college's Student Activities Committee. In this role, I created promo materials for events and a marketing & brand guide.",
    thumbnail: "/images/sac.png",
    tags: ["graphic design"],
    type: "gallery",
    slug: "sac",
    linkText: "View the gallery",
    items: [
      {
        type: "image",
        data: { src: "/images/sac/mt-joy.png", alt: "Mt. Joy concert poster" },
      },
      {
        type: "image",
        data: {
          src: "/images/sac/vegas-night.png",
          alt: "Vegas Night event poster",
        },
      },
      {
        type: "image",
        data: { src: "/images/sac/sales.png", alt: "Sales concert poster" },
      },
      {
        type: "image",
        data: {
          src: "/images/sac/painting-party.png",
          alt: "Painting Party event poster",
        },
      },
      {
        type: "image",
        data: {
          src: "/images/sac/rocknroll.png",
          alt: "Rock 'n Roll-er Skate event poster",
        },
      },
      {
        type: "image",
        data: {
          src: "/images/sac/spring-fling.png",
          alt: "Spring Fling event poster",
        },
      },
      {
        type: "image",
        data: {
          src: "/images/sac/throwback-time-machine.png",
          alt: "Throwback Time Machine event poster",
        },
      },
      {
        type: "image",
        data: {
          src: "/images/sac/yoga.png",
          alt: "Yoga in the Pine Grove event poster",
        },
      },
      {
        type: "image",
        data: {
          src: "/images/sac/coffee-house-audition.png",
          alt: "Coffee House Audition event poster",
        },
      },
      {
        type: "image",
        data: {
          src: "/images/sac/food-truck-frenzy.png",
          alt: "Food Truck Frenzy event poster",
        },
      },
      {
        type: "image",
        data: {
          src: "/images/sac/mentalist.png",
          alt: "The Mentalist event poster",
        },
      },
      {
        type: "image",
        data: { src: "/images/sac/kickball.png", alt: "Kickball event poster" },
      },
      {
        type: "image",
        data: {
          src: "/images/sac/people-of-the-year.png",
          alt: "People of the Year event poster",
        },
      },
      {
        type: "image",
        data: { src: "/images/sac/sk80s.png", alt: "Sk80s event poster" },
      },
      {
        type: "image",
        data: {
          src: "/images/sac/brand-guidelines.png",
          alt: "SAC Brand Guidelines",
        },
      },
    ],
  },

  {
    title: "Portfolio Site",
    description:
      "The site you're currently viewing! Built with Remix and Tailwind CSS.",
    thumbnail: "/images/jonathanchaffer.jpg",
    tags: ["remix.js", "tailwind css"],
    type: "no-link",
  },
  {
    title: "CQL",
    description:
      "During a summer internship at CQL, I worked with a team to build an internal employee performance tracking tool.",
    thumbnail: "/images/cql.png",
    tags: ["typescript", "react"],
    type: "no-link",
  },
];
