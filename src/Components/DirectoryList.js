import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import categoryImage from "../Images_climate_site/anemone-flowers-cluster-spring-blooms-decoration-floral-branches-stems-blossomed-field-plants-multicolored-wildflowers-decor-botanical-flat-vector-illustration-isolated-white-background.png"

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
            <p>Explore organisations that are taking climate action by choosing a category that resonates with you below and discover organisations who are making a positive change in that category. <br /><br />Learn more about the organisations and visit their websites to see how you can support them or get involved yourself.</p>
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
                <img src={categoryImage} alt="Illustration of flowers" className="category-image" />
                </div>
        </div>
    );
}

export default DirectoryList;
