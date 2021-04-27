import React, { useEffect, useState } from "react";
import "./App.css";
import ReceipeList from "./ReceipeList";

function App() {
  const APP_ID = "";
  const APP_KEY = "";

  const [receipes, setReceipes] = useState([]);
  const [search, setSearch] = useState("");
  const [Searchresult, setSearchResult] = useState("chicken");

  useEffect(() => {
    getReceipes();
  }, [Searchresult]);

  const getReceipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${Searchresult}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setReceipes(data.hits);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchResult(search);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="Search-form">
        <input
          type="text"
          className="Search-Bar"
          value={search}
          onChange={handleChange}
        />
        <button type="submit" className="Search-Button">
          search
        </button>
      </form>
      <div className="receipeList">
        {receipes.map((receipe) => (
          <ReceipeList
            key={receipe.recipe.label}
            title={receipe.recipe.label}
            image={receipe.recipe.image}
            calories={receipe.recipe.calories}
            ingredients={receipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
