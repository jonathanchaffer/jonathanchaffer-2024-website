# Jonathan Chaffer's website

Built with [React Router](https://reactrouter.com/) and [Vite](https://vite.dev/).

Requires Node.js 22.x. Install dependencies with `npm ci`.

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

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
