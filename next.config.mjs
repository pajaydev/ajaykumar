/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static HTML in `out/` — deployable to any static host.
  output: "export",
  // Emit `path/index.html` so URLs keep the trailing slash Gatsby used.
  trailingSlash: true,
  images: { unoptimized: true },
  // Don't let `next dev` write its own AGENTS.md / CLAUDE.md into the repo.
  agentRules: false,
}

export default nextConfig
