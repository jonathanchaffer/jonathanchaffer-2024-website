const tags = [
  "next.js",
  "builder.io",
  "typescript",
  "react",
  "postgresql",
  "cloud platforms",
  "node.js",
  "p5.js",
] as const;

export type Tag = (typeof tags)[number];

export type Project = {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  tags: Tag[];
  fullWidth?: boolean;
} & (
  | {
      url: string;
      embedUrl?: string;
      linkText: string;
    }
  | {
      url?: never;
      embedUrl: string;
      linkText: string;
    }
  | {
      url?: never;
      embedUrl?: never;
    }
);
