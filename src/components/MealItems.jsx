import { Link } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import React from 'react';

export default function MealItems(props) {
  const { strMeal, strMealThumb, strCategory, idMeal, saved } = props.meal;
  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if (props.meal[`strIngredient${i}`]) {
      ingredients.push(props.meal[`strIngredient${i}`]);
    } else {
      break;
    }
  }
  const heartStyle = {color: "red", cursor: 'pointer'}
  return (

    <div className="flex justify-center">
      <div className="meal-item flex items-center py-4">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="w-1/4 object-cover rounded-lg shadow-md"
        />
      <div className="meal-details flex flex-col justify-center ml-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center">{strMeal} 
            <span className="ml-1" 
              style={heartStyle}
              onClick={()=>props.handleSave(idMeal)}>
              {saved? <AiFillHeart/> : <AiOutlineHeart/>}
            </span>
        </h2>
        <p className="text-gray-600 font-medium mb-2">Category: {strCategory}</p>
        <p className="text-gray-600 font-medium mb-2">
          Ingredients: {ingredients.join(", ")}
        </p>
        <div className="inline-block">
          <Link
            to={`/mealdetails/${idMeal}`}
            className="mt-4 px-2 py-1 rounded-md bg-green-500 text-white font-medium hover:bg-green-600 transition duration-200 text-sm"
          >
            See details
          </Link>
        </div>
      </div>
    </div>
  </div>

  );
}