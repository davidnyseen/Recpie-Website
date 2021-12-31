import HomeBody from './../homeBody/HomeBody';
import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "./../store/homeReducer";
import { useState, useEffect } from 'react'

import './Home.css'


const Home = () => {
    // const { error, isPending, data: recipes } = useFetch('http://localhost:8000/recipes')
    const dispatch = useDispatch();
    const { recipes } = useSelector((state) => state.recipes);
  
    useEffect(() => {
      dispatch(getRecipes());
      console.log()
    }, [dispatch]);
  
    return ( 
    <div className="container">
        <h1>recipes</h1>
        { recipes && <HomeBody recipes={recipes} /> }
        {/* {recipes && recipes.map((user, i) => <h1 key={i}>{user.title}</h1>)} */}

    </div>
     );
}
 
export default Home;