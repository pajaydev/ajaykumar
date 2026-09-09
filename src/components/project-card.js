export default function ProjectCard({ emoji, title, desc, link, pills }) {
  return (
    <a className="card" href={link} target="_blank" rel="noopener noreferrer">
      <span className="card__head">
        <span className="card__emoji" aria-hidden="true">
          {emoji}
        </span>
        <span className="card__title">{title}</span>
        <span className="card__arrow" aria-hidden="true">
          ↗
        </span>
      </span>
      <span className="card__desc">{desc}</span>
      <span className="card__tags">
        {pills.map((pill) => (
          <span key={pill}>{pill}</span>
        ))}
      </span>
    </a>
  )
}
