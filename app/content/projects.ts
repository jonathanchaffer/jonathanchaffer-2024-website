import { Project } from "~/types";

export const projects: Project[] = [
  {
    title: "Atomic Object",
    description:
      "I currently work as a software consultant and developer at Atomic Object. In this role, I work closely with clients to deliver high-quality custom software solutions. During my time at Atomic, I've worked on a variety of projects serving a range of industries, including retail, manufacturing, and franchising. I also write regularly for Atomic Spin.",
    thumbnail: "/images/atomic-object.png",
    tags: [
      "typescript",
      "react",
      "postgresql",
      "cloud platforms",
      "node.js",
      "python",
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
    images: [],
  },
];
