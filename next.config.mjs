/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML in `out/`.
  output: "export",
  // Emit `path/index.html`, so the old Gatsby URLs keep working.
  trailingSlash: true,
  images: { unoptimized: true },
  // Don't write AGENTS.md / CLAUDE.md into the repo on dev.
  agentRules: false,
}

export default nextConfig
