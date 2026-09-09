export default function ProjectRow({ emoji, title, desc, link }) {
  return (
    <a className="row" href={link} target="_blank" rel="noopener noreferrer">
      <span className="row__name">
        <span className="row__emoji" aria-hidden="true">
          {emoji}
        </span>
        {title}
      </span>
      <span className="row__desc">{desc}</span>
      <span className="row__arrow" aria-hidden="true">
        ↗
      </span>
    </a>
  )
}
