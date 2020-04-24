import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "bulma/css/bulma.css";
import "./App.css";

// useEffect runs everytime when any component is re-rendered.
const App = () => {
  const APP_ID = "4c92b890";
  const APP_KEY = "9c14d5ba79dbebac968930ab1802e692";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  useEffect(() => {
    // console.log("Click");
    getRecipes();
  }, [query]); // Using empty array [] assures the useEffect renders only for once.
  // One time call will be used for fetching the data from the API only once.
  // Use the value here like [query], where want to use useEffect() hook to run when the value changes

  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
  };
  return (
    <div className="App">
      <div className="jumbotron">
        <h1 className="display-4">Recipe App</h1>
        <p className="lead">Made with React</p>
        <hr className="my-4" />

        <div className="container">
          <form onSubmit={getSearch}>
            <div className="input-group">
              <input
                type="text"
                className=" form-control"
                placeholder="Search for recipes ... "
                onChange={updateSearch}
              />
              <div className="input-group-append">
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container">
        <div className="card-deck">
          {recipes.map((recipe) => (
            <Recipe
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              key={recipe.recipe.label} // I found recipe to be unique.
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
