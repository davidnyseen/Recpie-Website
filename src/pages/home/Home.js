import HomeBody from '../../components/homeBody/HomeBody';
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../components/store/homeReducer";
import { useState, useEffect } from 'react'
import './Home.css'
import Search from '../../components/search/Search'


const Home = () => {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(getRecipes());
    console.log()
  }, [dispatch]);

  return (

    <div className="container">
      <Search></Search>

      <h1>recipes</h1>
      {recipes && <HomeBody recipes={recipes} />}
    </div>
  );
}

export default Home;