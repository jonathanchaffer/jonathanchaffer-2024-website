import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("contact", "routes/contact._index.tsx"),
  route("work", "routes/work._index.tsx"),
  route("work/:slug", "routes/work.$slug.tsx"),
] satisfies RouteConfig;
