import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css?url";
import { Container } from "./components/container";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { TexturedBg } from "./components/textured-bg";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-bg text-bg-contrast">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="grow flex items-center mt-36">
            <Container>{children}</Container>
          </div>
          <Footer />
          <TexturedBg />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
