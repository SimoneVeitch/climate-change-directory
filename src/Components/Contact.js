import React, { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");

    const categories = ["Ocean", "Forests", "Poverty"]; // Hardcoded categories

    const handleSubmit = (e) => {
        e.preventDefault();
        const newOrganisation = { name, description, category, image };

        // Send a POST request to add the new organisation to the server

        // Assuming there's a function to clear the form inputs
        clearForm();
    };

    const clearForm = () => {
        setName("");
        setDescription("");
        setCategory("");
        setImage("");
    };

    return (
        <div>
            <h1>Contact</h1>
            <p>Get in touch</p>
            <h2>Add an organisation to the directory</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Description:
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <label>
                    Category:
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select a category</option>
                        {categories.map((cat, index) => (
                            <option key={index} value={cat}>{cat}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Image URL:
                    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
            <p>Please note: the directory is checked daily. Inaccurate or inappropriate content will be removed</p>
        </div>
    );
}

export default Contact;
