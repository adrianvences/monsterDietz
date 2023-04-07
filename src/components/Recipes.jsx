import React from 'react'
import { Outlet } from "react-router-dom"
import axios from 'axios';
import {useEffect , useState} from 'react';


function Recipes() {
  const [recipes, setRecipes] = useState([]); // send this piece of state down with context prop
  const [flag, setFlag] = useState(false)

  useEffect(() => {
  const controller = new AbortController();
  axios
    .get('http://localhost:5001/api/recipes', {signal: controller.signal})
    .then(res => {
      setRecipes(res.data)
      setFlag(!flag)
    })
    .catch(err => console.log(err))
  return () => controller.abort();
  }, [flag]);
  return (
    
    <div className=''>
      <Outlet context={{recipes, flag, setFlag}} /> 
      
    </div>
    
  
  )
}

export default Recipes