import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import "./globals.css"

const description =
  "Hi, this is Ajay. Software Engineer, Passionate about Web and love building things"

export const metadata = {
  metadataBase: new URL("https://www.ajaykumar.dev"),
  title: {
    default: "Ajaykumar Prathap | Software Engineer",
    template: "%s | Ajaykumar Prathap",
  },
  description,
  keywords: [
    "Software Engineer",
    "Javascript",
    "Web developer",
    "Full stack developer",
  ],
  authors: [{ name: "Ajaykumar Prathap" }],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Ajaykumar Prathap",
    title: "Ajaykumar Prathap | Software Engineer",
    description,
  },
  twitter: {
    card: "summary",
    creator: "@ajaykumar__p",
    site: "@ajaykumar__p",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
