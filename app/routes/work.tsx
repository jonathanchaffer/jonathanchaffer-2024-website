import { Card } from "~/components/card";
import { PageHeader } from "~/components/page-header";
import { projects } from "~/content/projects";

export default function () {
  return (
    <>
      <PageHeader>Work</PageHeader>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <Card key={project.slug}>
            <div className="flex flex-col md:flex-row gap-x-8 gap-y-4 justify-center md:items-center">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-64"
              />
              <div className="flex flex-col grow gap-2">
                <h2 className="text-4xl">{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
