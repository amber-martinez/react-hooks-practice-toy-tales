import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
// import { useEffect } from "react/cjs/react.production.min";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  useEffect(() => {
    fetch(`http://localhost:3001/toys`)
    .then((r) => r.json())
    .then((data) => setToys(data))
  }, [])

  function handleAddToy(newToy) {
    setToys([...toys, newToy])
  }

  function deleteToy(deletedToy) {
    let updatedToys = toys.filter(toy => {
      return toy.id !== deletedToy.id
    })
    setToys(updatedToys)
  }

  function updateLikes(updatedToyLike) {
    const updatedToyLikes = toys.map((toy) => {
      if (toy.id === updatedToyLike.id) {
        return updatedToyLike
      } else {
        return toy
      }
    })
    setToys(updatedToyLikes)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteToy={deleteToy} updateLikes={updateLikes} />
    </>
  );
}

export default App;
