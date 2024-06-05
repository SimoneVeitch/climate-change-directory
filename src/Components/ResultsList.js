import React, { useState, useEffect } from "react";
import DirectoryCard from "./DirectoryCard";
import Search from "./Search";


function ResultsList({ list, category }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredOrganisations, setFilteredOrganisations] = useState(list);

    useEffect(() => {
        const filtered = list.filter(
            (organisation) =>
                (!category || organisation.category.toLowerCase() === category.toLowerCase()) &&
                (!searchQuery || organisation.name.toLowerCase().includes(searchQuery.toLowerCase()))
        );
        setFilteredOrganisations(filtered);
    }, [category, searchQuery, list]);

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
                    <DirectoryCard key={index} organisation={organisation} category={category} />
                ))}
            </div>
            </div>
        </>
    );
}

export default ResultsList;
