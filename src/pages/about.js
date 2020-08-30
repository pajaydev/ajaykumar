import React from 'react';
import Layout from "../components/layout";

export default () => {
    return (
        <Layout>
            <div className="blog">
                <h1>Hey, I'm Ajay <span className="wave">👋</span></h1>
                <p>I work at <a href="https://www.ebay.com/">eBay</a> as Full Stack Software Engineer. I like fixing WEB stuff and I spend most of my time writing code in Java and Javascript.</p>
                <p>I love opensource and I build things during my free time. I am always up to grab a coffee ☕️.</p>
                <p>I worked before at <a href="https://www.geniusplaza.com/en/">Genius plaza</a> as Front-End Intern to migrate the existing application to React JS. Prior to that I worked in Infosys as Full-Stack Engineer.</p>
                <p>I like doing outdoor activities like hiking, <a href="https://www.strava.com/athletes/20540376">running</a>.</p>
            </div>
        </Layout>
    )
}