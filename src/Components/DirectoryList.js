import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import categoryImage from "../anemone-flowers-cluster-spring-blooms-decoration-floral-branches-stems-blossomed-field-plants-multicolored-wildflowers-decor-botanical-flat-vector-illustration-isolated-white-background.png"

function DirectoryList({ list }) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const uniqueCategories = Array.from(new Set(list.map(org => org.category)));
        setCategories(uniqueCategories);
    }, [list]);
    

    return (
        <div id="directory-container">
            <div className="directory-copy">
      <h1 className="directory-h1">DIRECTORY</h1>
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
            <div className="category-container">
                <img src={categoryImage} alt="Illustartion of family planting trees" className="category-image" />
                </div>
        </div>
    );
}

export default DirectoryList;
