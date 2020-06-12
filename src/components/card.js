import React from 'react';
import './card.css';

export default ({title, desc, pills, link}) => {
    return (
        <div className="card">
            <h4 className="card__title"><a href={link} target="_blank">{title}</a></h4>
            <div className="card__desc">{desc}</div>
            <div className="card__pills">
                {pills.map((pill) => {
                    return <span>{pill}</span>
                })}
            </div>
        </div>
    )
}