import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Route,
  createHashRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from './pages/Home';
import Layout from './components/Layout';
import About from './pages/About';
import SavedRecipes from './pages/SavedRecipes';
import Blog from './pages/Blog';
import MealDetails from './pages/MealDetails';

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="/mealdetails/:id" element={<MealDetails/>}/>
      <Route path="about" element={<About />} />
      <Route path="saved-recipe" element={<SavedRecipes />} />
      <Route path="blog" element={<Blog />} />
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

     <RouterProvider router={router}/>

  
);

