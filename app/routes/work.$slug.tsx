import { LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Markdown from "react-markdown";
import Masonry from "react-masonry-css";
import { $path } from "remix-routes";
import { z } from "zod";
import { Card } from "~/components/card";
import { Link } from "~/components/link";
import { PageHeader } from "~/components/page-header";
import { projects } from "~/content/projects";
import { Project, WithEmbed, WithGallery } from "~/types";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { slug } = z.object({ slug: z.string() }).parse(params);

  const project = projects.find(
    (project): project is WithEmbed<Project> | WithGallery<Project> =>
      (project.type === "embed" || project.type === "gallery") &&
      project.slug === slug
  );

  if (!project) {
    throw redirect($path("/work"));
  }

  return json({ project });
};

export default function () {
  const { project } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-8">
      <Link to={$path("/work")} direction="left">
        Back
      </Link>
      <PageHeader noMargin>{project.title}</PageHeader>
      <Markdown className="max-w-prose flex flex-col gap-2">
        {project.longDescription ?? project.description}
      </Markdown>
      {project.type === "embed" && (
        <div className="max-w-screen-md">
          <Card>
            <div className="aspect-square">
              <iframe
                src={project.embedUrl}
                title={project.title}
                className="h-full w-full"
              />
            </div>
          </Card>
        </div>
      )}
      {project.type === "gallery" && (
        <Masonry
          className="masonry"
          columnClassName="masonry-column"
          breakpointCols={{ default: 3, 600: 2 }}
        >
          {project.images.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="border border-bg-contrast"
              />
            </div>
          ))}
        </Masonry>
      )}
    </div>
  );
}
