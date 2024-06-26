import React, { useState } from "react";

function Contact({ onAddOrganisation }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [website, setWebsite] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const categories = ["Oceans", "Forests", "Humanitarian", "Food", "Animals", "Energy"]; // Hardcoded categories

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newOrganisation = { id: Date.now(), name, description, category, image, website };
    
        console.log("Submitting:", newOrganisation); 
    
        try {
            const response = await fetch("https://climate-data.onrender.com/organisations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newOrganisation)
            });
    
            console.log("Response status:", response.status); 
    
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Server error: ${response.status} - ${errorText}`);
            }
    
            const data = await response.json();
    
            if (data.error) {
                throw new Error(data.error);
            }
    
            console.log("Organisation added:", data);
            setSubmitted(true);
            clearForm();
            onAddOrganisation(data);
        } catch (error) {
            console.error("Error adding organisation:", error.message);
        }
    };
    
    const clearForm = () => {
        setName("");
        setDescription("");
        setCategory("");
        setImage("");
        setWebsite("");
    };

    return (
        <div id="contact-container">
          <h1 className="contact-h1">ADD ORGANISATION</h1>
          {submitted ? (
            <p>Thank you for your submission!</p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
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
              <label>
                Website URL:
                <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} />
              </label>
              <button type="submit">Submit</button>
            </form>
          )}
          <p className="contact-p">Please note: the directory is checked daily. Inaccurate or inappropriate content will be removed</p>
        </div>
      );
    }
    
    export default Contact;