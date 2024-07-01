import { LoaderFunctionArgs, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { $path } from "remix-routes";
import { z } from "zod";
import { Card } from "~/components/card";
import { PageHeader } from "~/components/page-header";
import { projects } from "~/content/projects";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { slug } = z.object({ slug: z.string() }).parse(params);

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    throw redirect($path("/work"));
  }

  return json({ project });
};

export default function () {
  const { project } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-8 max-h-screen">
      <PageHeader noMargin>{project.title}</PageHeader>
      <p className="max-w-prose">{project.description}</p>
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
    </div>
  );
}
