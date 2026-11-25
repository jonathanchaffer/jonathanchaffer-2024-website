# Jonathan Chaffer's website

Built with [React Router](https://reactrouter.com/) and [Vite](https://vite.dev/).

Requires Node.js 20.19+, 22.13+, or 24+. Install dependencies with `npm ci`.

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

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
