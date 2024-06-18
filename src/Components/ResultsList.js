import React, { useState, useEffect } from "react";
import DirectoryCard from "./DirectoryCard";
import Search from "./Search";

function ResultsList( {category}) {
    const [organisations, setOrganisations] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/organisations");
                const data = await response.json();
                setOrganisations(data);
            } catch (error) {
                console.error("Error fetching organisations:", error);
            }
        };
        fetchData();
    }, []);

    const filteredOrganisations = organisations.filter(
        (organisation) =>
            (!category || organisation.category.toLowerCase() === category.toLowerCase()) &&
            (!searchQuery || organisation.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <>
            <div id="list-container">
                <h1>Results</h1>
                <Search onSearch={handleSearch} />
                <div className="result-container">
                    {filteredOrganisations.map((organisation, index) => (
                        <DirectoryCard key={index} organisation={organisation} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default ResultsList;
