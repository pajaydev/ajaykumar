import social from "@/data/social.json"

export default function SiteFooter() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Ajaykumar Prathap</span>
      <div className="footer__socials">
        {social.map(({ name, title, link, path }) => (
          <a
            key={name}
            href={link}
            aria-label={title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Icons are drawn inside the middle 32px of a 64px grid. */}
            <svg viewBox="16 16 32 32" aria-hidden="true">
              <path d={path} />
            </svg>
          </a>
        ))}
      </div>
    </footer>
  )
}
