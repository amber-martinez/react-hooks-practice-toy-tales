import React, { useState } from "react";

function ToyForm({ handleAddToy }) {

  const [newToyName, setNewToyName] = useState("")
  const [newToyImage, setNewToyImage] = useState("")

  function handleNewToyName(event) {
    setNewToyName(event.target.value)
  }

  function handleNewToyImage(event) {
    setNewToyImage(event.target.value);
  }

  function submitNewToy(e) {
    e.preventDefault();
    const newToy = {
      name: newToyName,
      image: newToyImage,
      likes: 0
    };
    fetch(`http://localhost:3001/toys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy)
    })
    .then((r) => r.json())
    .then((newToy) => handleAddToy(newToy))
  }

  return (
    <div className="container" onSubmit={submitNewToy}>
      <form className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleNewToyName}
          value={newToyName}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleNewToyImage}
          value={newToyImage}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
