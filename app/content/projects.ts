import { Project } from "~/types";

export const projects: Project[] = [
  {
    title: "Atomic Object",
    slug: "atomic-object",
    description:
      "I currently work as a software consultant and developer at Atomic Object. In this role, I work closely with clients to deliver high-quality custom software solutions. Additionally, I contribute regularly to Atomic's blog, Atomic Spin.",
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
      "Custom blog website built with Next.js. Uses Builder.io for content management.",
    thumbnail: "/images/story-soapbox.png",
    tags: ["next.js", "builder.io"],
    url: "https://storysoapbox.com",
    linkText: "Check it out",
  },
  {
    title: "Lorem Ipsum",
    slug: "lorem-ipsum",
    description:
      "Cupidatat ut voluptate anim enim aliquip veniam id dolor ipsum minim consectetur eu nostrud ullamco.",
    thumbnail: "https://via.placeholder.com/512",
    tags: [],
  },
  {
    title: "Lorem Ipsum",
    slug: "lorem-ipsum",
    description:
      "Cupidatat ut voluptate anim enim aliquip veniam id dolor ipsum minim consectetur eu nostrud ullamco.",
    thumbnail: "https://via.placeholder.com/512",
    tags: [],
    fullWidth: true,
  },
];
