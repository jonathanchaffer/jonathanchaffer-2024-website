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
  "python",
  "swift",
  "redis",
  "c#",
  ".net",
  "2d animation",
  "filmmaking",
] as const;

export type Tag = (typeof tags)[number];

type WithExternalLink<T> = T & {
  type: "external-link";
  url: string;
  linkText: string;
};

export type WithEmbed<T> = T & {
  type: "embed";
  slug: string;
  embedUrl: string;
  linkText: string;
  longDescription?: string;
};

type WithNoLink<T> = T & {
  type: "no-link";
};

type Image = {
  src: string;
  alt: string;
};

type Pdf = {
  thumbnailSrc: string;
  thumbnailAlt: string;
  src: string;
};

export type GalleryItem =
  | { type: "image"; data: Image }
  | { type: "pdf"; data: Pdf };

export type WithGallery<T> = T & {
  type: "gallery";
  items: GalleryItem[];
  slug: string;
  linkText: string;
  longDescription?: string;
};

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
  | WithNoLink<BaseProject>
  | WithGallery<BaseProject>;

export type Result<T = undefined> =
  | {
      status: "success";
      data: T;
    }
  | {
      status: "failure";
      message: string;
    };
