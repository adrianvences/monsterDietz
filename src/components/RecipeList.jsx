import React from 'react'




function RecipeList({recipes, setLoaded}) {
  return (
    <div className='d-flex justify-content-center flex-wrap gap-3 pb-3'>
      {
        recipes && recipes.map((recipe) => {
          return (
            <div key= {recipe.id} className='card food-card p-1 bg-secondary' >
            <img src={`${recipe.image}`} className="card-img-top" alt={`${recipe.title}`} />
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="card-text"></p>
              <a  className="btn btn-danger">Details</a>
              <a href="" id="recipeLink"></a>
            </div>
          </div>





                // <div key= {recipe.id} className='card'>
                //   <div className="card-header">{recipe.title}</div>
                //   <img src={`${recipe.image}`} alt={`${recipe.title}`} />
                // </div>
          )
        })
      }
    </div>
  )
}

export default RecipeList


