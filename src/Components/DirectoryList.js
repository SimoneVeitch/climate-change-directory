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
            <div className="directory-copy">
      <h1>CLIMATE ACTION CATEGORIES</h1>
            <p>Select from a category below that you are passionate about. Explore organizations that are making a positive change in the world. Choose a category that resonates with you and discover ways to get involved. Visit the organizations' pages to see how you can support them or get involved yourself.</p>
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
