# Personal Website

My personal website, built with [Next.js](https://nextjs.org/) ❤️.

## Run the code locally

```
npm install
```

```
npm run dev
```

## Build

`npm run build` writes a static site to `out/`. `npm run serve` previews that
build locally.

## Deploy

Netlify builds `master` on every push and publishes `out/` — see
`netlify.toml`.

## Writing a post

Add `src/blogs/<year>/<slug>/index.md` with front matter:

```
---
path: "/blog/<year>/<slug>"
date: "2021-02-02"
title: "Post title"
---
```

The `path` value is the URL the post is published at. Images go in
`public/blog/<year>/<slug>/` and are referenced by absolute path.
