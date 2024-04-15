import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { $path } from "remix-routes";
import { Card } from "~/components/card";

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
        <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-8xl whitespace-nowrap">
          Jonathan Chaffer
        </h1>
        <h2 className="sm:text-xl md:text-2xl lg:text-4xl">
          Developer • Designer • Artist
        </h2>
      </div>
      <Card>
        <div className="flex-col-reverse md:flex-row flex gap-x-8 gap-y-4">
          <img
            src="/jonathanchaffer.jpg"
            alt="Jonathan Chaffer"
            className="w-32 h-32"
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
      <Link
        to={$path("/work")}
        className="text-xl md:text-2xl lg:text-4xl hover:underline"
      >
        View my work &rarr;
      </Link>
    </div>
  );
}
