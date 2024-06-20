const tags = [
  "next.js",
  "builder.io",
  "typescript",
  "react",
  "postgresql",
  "cloud platforms",
  "node.js",
  "",
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
      linkText: string;
    }
  | {
      url?: never;
    }
);
