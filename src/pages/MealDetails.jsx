import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getIngredientMeasure, getYouTubeID } from '../helper'
import Youtube from '../components/Youtube'
import { AiFillHeart } from 'react-icons/ai'

const MealDetails = () => {
  const [currentMeal, setCurrentMeal] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((res)=> res.json())
    .then((data) => setCurrentMeal(data.meals[0]))
  },[id])
  const ingredientMeasure = getIngredientMeasure(currentMeal)
  return (
    
    <div className="w-11/12 md:w-2/3 mx-auto mb-20">
  <div className="flex flex-col items-center">
    <h1 className="text-4xl font-bold my-4 flex items-center justify-center">{currentMeal.strMeal}</h1>
    <div className="flex flex-wrap justify-center">
      <div className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full mr-2 mb-2">{currentMeal.strArea ? currentMeal.strArea : "N/A"}</div>
      <div className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full mr-2 mb-2">{currentMeal.strArea ? currentMeal.strCategory: "N/A"}</div>
    </div>
  </div>
  <div className="my-6 md:flex flex-wrap justify-center items-center">
    <img src={currentMeal.strMealThumb} alt={`An example of ${currentMeal.strMeal}`} className="rounded-2xl mb-4 w-full md:w-3/5"/>
    <div className="w-full md:w-auto md:ml-8">
      <h3 className="text-xl font-bold mb-4">Ingredients 🌱</h3>
      <ul>
        {ingredientMeasure.map((ingredient, i) => ( 
          <li key={i} className="text-lg">{ingredient.ingredient} - {ingredient.measure}</li>
        ))}
      </ul>
    </div>
  </div>
  <div className="w-full flex flex-col md:mx-4">
    <h3 className="text-xl font-bold my-2">Instructions</h3>
    <p className="mb-1 text-lg">{currentMeal.strInstructions}</p>
    <p className="mb-1 text-lg">Tags: {currentMeal.strTags}</p>
  </div>
</div>

  ) 
}

export default MealDetails
