const tags = ["next.js", "builder.io"] as const;

export type Tag = (typeof tags)[number];

export type Project = {
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  tags: Tag[];
  url?: string;
};
