import { Card } from "~/components/card";
import { Link } from "~/components/link";
import { PageHeader } from "~/components/page-header";
import { projects } from "~/content/projects";

export default function () {
  return (
    <>
      <PageHeader>Work</PageHeader>
      <Card>
        <div className="grid grid-cols-1 xl:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="flex flex-col sm:flex-row justify-center sm:items-center bg-bg"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-32 sm:h-auto object-cover sm:w-48 lg:w-64"
              />
              <div className="flex flex-col grow gap-4 px-8 py-8 sm:py-0">
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
