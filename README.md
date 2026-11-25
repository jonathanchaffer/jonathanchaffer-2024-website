# Jonathan Chaffer's website

Built with [React Router](https://reactrouter.com/) and [Vite](https://vite.dev/).

Requires Node.js 22.x. Install dependencies with `npm ci`.

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Images with blur placeholders

Import an image from `public/images` with `?blur` and pass it to `BlurImage`:

```tsx
import portrait from "/images/jonathanchaffer.jpg?blur";
import { BlurImage } from "~/components/blur-image";

<BlurImage image={portrait} alt="Jonathan Chaffer" className="w-64" />;
```

Vite uses Sharp during development and builds to generate a tiny inline preview
and read the original dimensions. Only maintain the original image; there are no
separate placeholder files to update, and Sharp is not shipped to the browser.

`className` and `style` size the image container, which reserves the original
aspect ratio by default. For a cropped frame, override `style.aspectRatio` or
provide a fixed height. For a frame that stretches with a flex row, use
`style={{ aspectRatio: "auto" }}` with explicit width and stretch alignment.
Images fill the frame using `object-fit: cover`.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Vercel deployments use the React Router framework preset configured in
`vercel.json` and `react-router.config.ts`.

### DIY

The built-in React Router app server can also run the production build on Node.js.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
