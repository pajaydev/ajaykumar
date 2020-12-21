import React from 'react';
import { Link } from "gatsby"

export default () => {
    return (
        <section className="header">
            <Link className="header--link" to="/">
            👈 Back
          </Link>
        </section>
    )
}