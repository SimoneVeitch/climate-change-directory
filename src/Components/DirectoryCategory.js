import React from "react";
import { Link } from "react-router-dom";

function DirectoryCategory({ category }) {


    return (
        <div className="card">
            <Link to={`/results/${category.toLowerCase()}`}>
                <h2>{category}</h2>
            </Link>
        </div>
    );
}

export default DirectoryCategory;