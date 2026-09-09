export const metadata = { title: "About" }

export default function About() {
  return (
    <div className="article">
      <h1>
        Hey, I&rsquo;m Ajay <span className="wave">👋</span>
      </h1>
      <p>
        I&rsquo;m a full-stack engineer at{" "}
        <a href="https://aws.amazon.com/">AWS</a>. I&rsquo;m passionate about
        building things &mdash; mostly about taking a rough idea and turning it
        into something people actually use.
      </p>
      <p>
        Before AWS I was at <a href="https://www.ebay.com/">eBay</a>, also as a
        full-stack engineer. Before that I was a front-end intern at{" "}
        <a href="https://www.geniusplaza.com/en/">Genius Plaza</a>, migrating
        their app to React, and prior to that a software engineer at{" "}
        <a href="https://www.infosys.com/">Infosys</a>.
      </p>
      <p>
        I love open source and I build things in my free time. I am always up to
        grab a coffee ☕️.
      </p>
      <p>
        I like doing outdoor activities like hiking,{" "}
        <a href="https://www.strava.com/athletes/20540376">running</a>.
      </p>
    </div>
  )
}
