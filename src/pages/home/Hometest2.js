import HomeBody from '../../components/homeBody/HomeBody';
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../store/homeReducer";
import { searchValue } from "../../store/searchReducer";
import { useState, useEffect } from 'react'
import './Home.css'
import Search from '../../components/search/Search'
import { ClassNames } from '@emotion/react';
import SingleRecipe from '../singleRecipe/SingleRecipe';
import Popup from '../../components/Popup/Popup';


const Home = () => {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.recipes);
  const { value } = useSelector((state) => state.searchReducer);
  const [searchResult, setSearchResult] = useState("");
  const { login } = useSelector((state) => state.login);



  useEffect(() => {
    //if(!login){ // getrecipes only if login state is false.
    dispatch(getRecipes(value)); // 
    //}
  }, [value]);


  //ADDED SINCE 04/04/2022
  const [displaySingle, setDisplaySingle] = useState(false);
  const [currentIndex, setIndex] = useState(-1);
  console.log(recipes);

  function setBack() {
    setDisplaySingle(false);
    togglePopup();
  }

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
  <div className="container-recipes"> 
    {displaySingle ?
    <div className="single-recipe">
      {/*<h1>{recipes[currentIndex].recipe.label}</h1>*/}
      {/*<img src={recipes[currentIndex].recipe.image}></img>*/}
      <SingleRecipe recipe={recipes[currentIndex].recipe} goBack={setBack}></SingleRecipe>


    </div>
    :
    <div className="all-recipes">
      <Search></Search>
      <h1>search results for:  <p style={{ 'color': 'rgb(13, 49, 82)', 'display': 'inline' }}>{value}</p></h1>

      <div className="recipe">
        {recipes && recipes.map((recipe, i) =>
        (
          <HomeBody key={i} index={i}
            image={recipe.recipe.image} label={recipe.recipe.label} 
            dishType={recipe.recipe.dishType} recipe={recipe.recipe} 
            handleClick={setDisplaySingle}
            updateIndex={setIndex}
            triggerPopup={togglePopup}
          />
        ))}
      </div>
    </div>}
  </div>
  );
}

export default Home;