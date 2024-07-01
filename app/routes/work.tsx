import { Card } from "~/components/card";
import { Link } from "~/components/link";
import { PageHeader } from "~/components/page-header";
import { projects } from "~/content/projects";
import { strs } from "~/content/strings";

export default function () {
  return (
    <>
      <PageHeader>{strs.WORK}</PageHeader>
      <Card>
        <div className="grid grid-cols-1 xl:grid-cols-2 bg-bg-contrast gap-[1px]">
          {projects.map((project) => (
            <div
              key={project.slug}
              className={`flex flex-col sm:flex-row justify-center sm:items-center bg-bg ${
                project.fullWidth ? "col-span-full" : "col-span-1"
              }`}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-64 sm:h-full object-cover sm:w-48 lg:w-64 lg:h-full"
              />
              <div className="flex flex-col grow gap-4 px-8 py-8">
                <h2 className="text-2xl md:text-4xl">{project.title}</h2>
                <p>{project.description}</p>
                {project.url && (
                  <div className="text-lg mb-1">
                    <Link to={project.url} openInNewTab>
                      {project.linkText}
                    </Link>
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-bg-alt rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
