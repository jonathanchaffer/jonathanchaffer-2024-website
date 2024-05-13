import { Card } from "~/components/card";
import { Link } from "~/components/link";
import { PageHeader } from "~/components/page-header";
import { projects } from "~/content/projects";

export default function () {
  return (
    <>
      <PageHeader>Work</PageHeader>
      <Card>
        <div className="grid grid-cols-1 xl:grid-cols-2 bg-bg-contrast gap-[1px]">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col md:flex-row gap-x-8 justify-center md:items-center bg-bg"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-64"
              />
              <div className="flex flex-col grow gap-4 p-4">
                <h2 className="text-xl md:text-4xl">{project.title}</h2>
                <p>{project.description}</p>
                {project.url && (
                  <Link to={project.url} openInNewTab>
                    Check it out
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
