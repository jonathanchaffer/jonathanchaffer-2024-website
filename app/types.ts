const tags = [
  "next.js",
  "builder.io",
  "typescript",
  "react",
  "postgresql",
  "cloud platforms",
  "node.js",
  "p5.js",
  "graphic design",
  "remix.js",
  "tailwind css",
] as const;

export type Tag = (typeof tags)[number];

type WithExternalLink<T> = T & {
  url: string;
  linkText: string;
};

export type WithEmbed<T> = T & {
  slug: string;
  embedUrl: string;
  linkText: string;
  longDescription?: string;
};

type WithNoLink<T> = T;

type BaseProject = {
  title: string;
  description: string;
  thumbnail: string;
  tags: Tag[];
  fullWidth?: boolean;
};

export type Project =
  | WithExternalLink<BaseProject>
  | WithEmbed<BaseProject>
  | WithNoLink<BaseProject>;
