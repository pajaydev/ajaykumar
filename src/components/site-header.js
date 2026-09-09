import Link from "next/link"
import Nav from "./nav"

export default function SiteHeader() {
  return (
    <header>
      <div className="masthead">
        <Link href="/" aria-label="Home">
          <img
            className="masthead__avatar"
            src="/profile.jpg"
            alt="Ajaykumar Prathap"
            width={48}
            height={48}
          />
        </Link>
        <div>
          <Link className="masthead__name" href="/">
            Ajaykumar Prathap
          </Link>
          <div className="masthead__role">
            Full Stack Engineer · San Jose, California
          </div>
        </div>
      </div>
      <Nav />
    </header>
  )
}
