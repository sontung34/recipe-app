
import { useState, useEffect } from 'react'
import { MdSearch } from 'react-icons/md'
import MealItems from '../components/MealItems'

export default function Home() {
  const [searchKeyWord, setSearchKeyWord] = useState('')
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    const storedRecipe = localStorage.getItem('recipe')
    if (storedRecipe) {
      setRecipe(JSON.parse(storedRecipe))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('recipe', JSON.stringify(recipe))
  }, [recipe])

  const handleSearchClick = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchKeyWord}`
    ).then((res) => res.json())
    const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || {}
    let newData = []
    for (let i=0; i<data.meals.length; i++){
      let meal = data.meals[i];
      let saved = false;
      for (let j=0; j<savedRecipes.length; j++){
        if (savedRecipes[j].idMeal === meal.idMeal){
          saved = true;
        
      }
    }
    newData.push({...meal, saved})
  }
  setRecipe(newData)
  
  }

  const handleKeyDown = async (e) => {
    if (e.keyCode === 13) {
      handleSearchClick()
    }
  }
  const handleSave = (id) => {
    setRecipe((prevRecipes) => {
      return prevRecipes.map((recipe) => {
        if (recipe.idMeal === id) {
          const saved = !recipe.saved
          const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || []
          const index = savedRecipes.findIndex((r) => r.idMeal === id)
          if (saved && index === -1) {
            savedRecipes.push(recipe)
          } else if (!saved && index !== -1) {
            savedRecipes.splice(index, 1)
          }
          const updatedSavedRecipes = savedRecipes.map((recipe) => {return recipe.saved? recipe : {...recipe, saved: true}})
          localStorage.setItem('savedRecipes', JSON.stringify(updatedSavedRecipes))
          return { ...recipe, saved }
        }
        return recipe
      })
    })
   
  }
  const mealElements = recipe ? (
    recipe.map((meal, i) => 
    <MealItems 
      key={i} 
      meal={meal} 
      handleSave={handleSave} 


    />)
  ) : (<h1 className='pt-10 flex justify-center'>Sorry no results 😢</h1>)


return (
  <div class='search-container w-full sm:w-1/2 px-2 mx-auto'>
  <div class="flex flex-col justify-center items-center pt-8 ">
    <h1 class="text-4xl font-bold mb-8">Type ingredients to search 👇</h1>
    <div class="flex flex-col sm:flex-row items-center justify-center">
      <input onChange={(e) => setSearchKeyWord(e.target.value)} onKeyDown={handleKeyDown} type="text" placeholder="What do you wanna cook?" class="w-full sm:w-auto border-2 border-gray-400 rounded-full h-12 px-4 focus:outline-none focus:border-green-500 mb-4 sm:mb-0 sm:mr-4" />
      <button class="w-full sm:w-auto px-6 py-3 rounded-full bg-green-500 text-white font-bold" onClick={handleSearchClick} >
        <MdSearch class='inline-block h-6 w-6' />
        <span>Search</span>
      </button>
    </div>
    <div class="w-full mt-6 mb-20">{mealElements}</div>
  </div>
</div>

);
}


