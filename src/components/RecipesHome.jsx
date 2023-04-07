import {
  Link,
  useOutletContext,
  useParams,
  useNavigate,
} from "react-router-dom";
import axios from "axios";

import React, {useEffect,useState} from 'react'
import RecipeList from "./RecipeList";

function RecipesHome() {
  const [food,setFood] = useState('');
  const[loaded, setLoaded] = useState(false);
  const [recipes,setRecipes] = useState ([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFood('');
    axios 
      .get(`http://localhost:5001/recipes/${food}`)
      .then((res) => {
        console.log(res.data);
        setRecipes(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="container containerTop ">
      <div className="card bg-dark">
        <div className="card-body">
        
        <form onSubmit={handleSubmit} >
          {/*  name input */}
          <div className="mb-3">
            <label htmlFor="food" className="form-label">
            <h2 className="text-light">Look up your protein of choice?</h2>
            </label>
            <input
              type="text"
              name="food"
              id="food"
              className="form-control"
              value={food}
              onChange={(e) => setFood(e.target.value)}
            />
            
            
          </div>
          <div className="d-flex justify-content-end ">
            <button type="submit" className="btn btn-danger m-3">
              Search
            </button>
          </div>
        </form>
        </div>
        {loaded && <RecipeList recipes = {recipes} setLoaded={setLoaded} /> }
      </div>
      </div>
      
    </div>
  )
}

export default RecipesHome