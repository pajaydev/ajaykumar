export const metadata = { title: "About" }

export default function About() {
  return (
    <div className="article">
      <h1>
        Hey, I&rsquo;m Ajay <span className="wave">👋</span>
      </h1>
      <p>
        I&rsquo;m a software engineer at{" "}
        <a href="https://aws.amazon.com/">AWS</a>. I like taking a rough idea
        and turning it into something people actually use 🛠️
      </p>
      <p>
        Before AWS, I was at <a href="https://www.ebay.com/">eBay</a>. Earlier, I
        interned at <a href="https://www.geniusplaza.com/en/">Genius Plaza</a>,
        where I helped move their app to React, and I started my career at{" "}
        <a href="https://www.infosys.com/">Infosys</a>.
      </p>
      <p>
        Outside work, I build side projects and contribute to open source. I also
        like to get outside, mostly hiking 🥾 and{" "}
        <a href="https://www.strava.com/athletes/20540376">running</a> 🏃. Always
        happy to grab a coffee ☕️
      </p>
    </div>
  )
}
