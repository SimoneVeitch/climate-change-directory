import React, { useState } from "react";
import DirectoryCard from "./DirectoryCard";
import Search from "./Search";

function ResultsList({ list }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredOrganisations, setFilteredOrganisations] = useState(list);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = list.filter(
            (organisation) =>
                organisation.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredOrganisations(filtered);
    };

    return (
        <>
            <Search onSearch={handleSearch} />
            <div className="resultsContainer">
                {filteredOrganisations.map((organisation, index) => (
                    <DirectoryCard key={index} organisation={organisation} />
                ))}
            </div>
        </>
    );
}

export default ResultsList;

