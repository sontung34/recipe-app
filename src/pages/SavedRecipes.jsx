import React from 'react'
import { useState } from 'react'
import MealItems from '../components/MealItems'
import { Link } from 'react-router-dom'
import catmeme from "../images/catmeme.jpg"

const SavedRecipes = () => {

  const [savedRecipes, setSavedRecipe] = useState(JSON.parse(localStorage.getItem('savedRecipes'))?? [])
  const handleSave = (id) => {
    setSavedRecipe((prev) => prev.filter((recipe) => recipe.idMeal !== id))
    const savedRecipes = JSON.parse(localStorage.getItem("savedRecipes")) || []
    const updatedSavedRecipes = savedRecipes.filter((recipe) => recipe.idMeal !== id)
    localStorage.setItem("savedRecipes", JSON.stringify(updatedSavedRecipes))
    const recipe = JSON.parse(localStorage.getItem("recipe"))
    const updatedRecipe = recipe.map((recipe) => {return recipe.idMeal === id? {...recipe, saved: !recipe.saved} : recipe})
    localStorage.setItem("recipe", JSON.stringify(updatedRecipe))
  }
  
  const mealElements = savedRecipes.length >0 ? 
    savedRecipes.map((meal, i) => 
    <MealItems 
      key={i} 
      meal={meal} 
      handleSave={handleSave} 

    />) : (
    <div className='flex flex-col justify-center items-center'>
      <img src={catmeme} alt="hungry cat" className='pt-6'/>
       <Link to="/" className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-6'>Back</Link>
    </div>
   
    )
  return (
    <div className='w-2/3 flex flex-col mx-auto mb-20'>
      {savedRecipes.length > 0 ? <h1 className='text-4xl my-6 font-bold flex flex-col items-center'>Your saved recipes 👇</h1> : ""}
      {mealElements}
    </div>
  )
}

export default SavedRecipes
