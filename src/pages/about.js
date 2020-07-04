import React from 'react';
import Layout from "../components/layout";

export default () => {
    return (
        <Layout>
            <div className="blog">
                <h1>Hey, I'm Ajay <span className="wave">👋</span></h1>
                <p>I love opensource and I build things during my free time. I am always up to grab a coffee</p>
                <p>I work at <a href="">eBay</a> as Software Engineer.</p>
                <p>I worked before at <a href="https://www.geniusplaza.com/en/">Genius plaza</a> as Front-End Intern to migrate the existing application to React JS.</p>
                <p>Prior to that I worked in Infosys as Full-Stack Engineer.</p>
            </div>
        </Layout>
    )
}