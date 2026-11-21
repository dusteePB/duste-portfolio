# dustePB portfolio

Next.js version of the original static portfolio.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm start
```

## Structure

- `app/` — Next.js App Router pages.
  - `(sparkles)` — pages with the sparkles body background.
  - `(wood)` — the history page with the wood body background.
- `content/` — the original page body markup, preserved verbatim and rendered as-is.
- `public/style.css` — the original stylesheet, unchanged.
- `public/pics/` — the original image and video assets.
- `next.config.mjs` — rewrites that keep the original `.html` URLs working
  (`/index.html`, `/indexgame.html`, `/indexhistory.html`, `/indexmv.html`,
  `/index_shows.html`).

The original visuals and markup quirks are intentionally left unchanged.
