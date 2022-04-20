import React from "react";

function ToyCard({ toy, deleteToy, updateLikes }) {

  const { name, image, likes, id } = toy;

  function handleDeleteToy() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then((r) => r.json())
    .then(() => deleteToy(toy))
  }

  function handleLikeBtn() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "likes": likes + 1
      })
    })
    .then(r => r.json())
    .then((updatedToyLike) => updateLikes(updatedToyLike))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeBtn}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
