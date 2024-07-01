import { Project } from "~/types";

export const projects: Project[] = [
  {
    title: "Atomic Object",
    slug: "atomic-object",
    description:
      "I currently work as a software consultant and developer at Atomic Object. In this role, I work closely with clients to deliver high-quality custom software solutions. During my time at Atomic, I've worked on a variety of projects serving a range of industries, including retail, manufacturing, and franchising. I also write regularly for Atomic Spin.",
    thumbnail: "/images/atomic-object.png",
    tags: ["typescript", "react", "postgresql", "cloud platforms", "node.js"],
    fullWidth: true,
    url: "https://spin.atomicobject.com/author/jonathan-chaffer/",
    linkText: "View my Spin posts",
  },
  {
    title: "Story Soapbox",
    slug: "story-soapbox",
    description:
      "Custom blog website built with Next.js. Uses Builder.io for content management. Features a custom component library that allows for easy content creation and editing.",
    thumbnail: "/images/story-soapbox.png",
    tags: ["next.js", "builder.io"],
    url: "https://storysoapbox.com",
    linkText: "Check it out",
  },
  {
    title: "Boerigter Center App",
    slug: "boerigter-center-app",
    description:
      "My college capstone project was a web application for Hope College's Boerigter Center for Calling and Career. The app helps students explore work opportunities and career paths via an interactive map view.",
    thumbnail: "/images/boerigter-center.png",
    tags: ["typescript", "react"],
  },
  {
    title: "Shape Stack",
    slug: "shape-stack",
    description:
      "Generative art project that explores organic line drawing. Randomly generated on each load, scaling automatically based on the window size.",
    thumbnail: "/images/shape-stack.png",
    tags: ["p5.js", "typescript"],
    fullWidth: true,
    embedUrl: "https://p5-shape-stack.vercel.app/",
    linkText: "Try it yourself",
  },
];
