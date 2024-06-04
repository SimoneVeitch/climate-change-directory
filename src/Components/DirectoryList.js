import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function DirectoryList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/organisations")
            .then((r) => r.json())
            .then((data) => {
                console.log(data);
                setList(data);
            });
    }, []);

    const getUniqueCategories = (organisations) => {
        const uniqueCategories = [];
        organisations.forEach((org) => {
            if (!uniqueCategories.includes(org.category)) {
                uniqueCategories.push(org.category);
            }
        });
        return uniqueCategories;
    };

    const uniqueCategories = getUniqueCategories(list);

    return (
        <div>
            <h1>Directory List</h1>
            <div>
                {uniqueCategories.map((category, index) => (
                    <div key={index} className="card">
                        <Link to={`/results/${category.toLowerCase()}`}>
                            <h2>{category}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DirectoryList;
