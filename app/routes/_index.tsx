import type { MetaFunction } from "@remix-run/node";
import { $path } from "remix-routes";
import { Card } from "~/components/card";
import { Link } from "~/components/link";
import { PageHeader } from "~/components/page-header";
import { strs } from "~/content/strings";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function () {
  return (
    <div className="flex flex-col gap-8 md:gap-16 items-start">
      <div className="hidden sm:block">
        <PageHeader noMargin>{strs.JONATHAN_CHAFFER}</PageHeader>
        <h2 className="sm:text-xl md:text-2xl lg:text-4xl">{strs.TAGLINE}</h2>
      </div>
      <Card>
        <div className="flex-col-reverse md:flex-row flex gap-x-8 gap-y-4 p-4">
          <img
            src="/jonathanchaffer.jpg"
            alt={strs.JONATHAN_CHAFFER}
            className="w-64 md:w-auto md:h-64"
          />
          <div className="flex flex-col gap-2 max-w-prose">
            <p>
              Hi, I&apos;m Jonathan! I&apos;m a software developer, graphic
              designer, and digital artist based in Grand Rapids, Michigan.
            </p>
            <p>
              I&apos;ve always been passionate about creating things —
              illustration, animation, music, design, and more. Most recently,
              my interests have turned toward computer software and delivering
              great user experiences.
            </p>
            <p>
              I currently work as a software developer & consultant at Atomic
              Object.
            </p>
          </div>
        </div>
      </Card>
      <div className="text-xl md:text-2xl lg:text-4xl">
        <Link to={$path("/work")}>View my work</Link>
      </div>
    </div>
  );
}
