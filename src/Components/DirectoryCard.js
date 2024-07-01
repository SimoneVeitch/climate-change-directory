import React from "react";

function DirectoryCard({ organisation }) {
    
    
    return (
        <div className="result-card">
            <h3>{organisation.name}</h3>
            <div className="img_pod">
            <img src={organisation.image} alt={organisation.name} />
            </div>
            <p>{organisation.description}</p>
            <a className="btn-primary" href={organisation.url}>Visit website</a>
        </div>
    );
}

export default DirectoryCard;
