import React from "react";

function DirectoryCard({ organisation }) {
    
    
    return (
        <div className="result-card">
            <h3>{organisation.name}</h3>
            <img src={organisation.image} alt={organisation.name} />
            <p>{organisation.description}</p>
            <a href={organisation.url}>Visit website</a>
        </div>
    );
}

export default DirectoryCard;