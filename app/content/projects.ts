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
      "Custom blog website built with Next.js. Uses Builder.io for content management. Features a custom component library that allows for easy content creation and editing.",
    thumbnail: "/images/story-soapbox.png",
    tags: ["next.js", "builder.io"],
    type: "external-link",
    url: "https://storysoapbox.com",
    linkText: "Check it out",
  },
  {
    title: "Boerigter Center App",
    description:
      "My college capstone project was a web application for Hope College's Boerigter Center for Calling and Career. The app helps students explore work opportunities and career paths via an interactive map view.",
    thumbnail: "/images/boerigter-center.png",
    tags: ["typescript", "react"],
    type: "no-link",
  },
  {
    title: "Organic Drawing",
    slug: "organic-drawing",
    fullWidth: true,
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
  {
    title: "Student Activities Committee",
    fullWidth: true,
    description:
      "I served as the lead graphic designer for my college's Student Activities Committee. In this role, I created promotional materials for campus events, along with a brand guide for future designers to follow.",
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
];
