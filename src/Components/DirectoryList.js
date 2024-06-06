import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import categoryImage from "../category_image.png"

function DirectoryList({ list }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const uniqueCategories = Array.from(new Set(list.map(org => org.category)));
        setCategories(uniqueCategories);
    }, [list]);
    

    return (
        <div id="list-container">
            <div id="directory-h1">
            <h1>CATEGORIES</h1>
            </div>
            <div className="card-container">
                {categories.map((category, index) => (
                    <div key={index} className="card">
                        <Link to={`/results/${category.toLowerCase()}`}>
                            <h2>{category}</h2>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="image-container">
                <img src={categoryImage} alt="Illustartion of family planting trees" className="category-image" />
                </div>
        </div>
    );
}

export default DirectoryList;
