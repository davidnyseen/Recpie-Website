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
import {updateRate} from '../../store/homeReducer'
import {saveRate} from "../../store/ratingReducer";



const Home = () => {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.recipes);//WITH SOGRAIM
  const { value } = useSelector((state) => state.searchReducer);
  const [searchResult, setSearchResult] = useState("");
  const { login } = useSelector((state) => state.login);

  //TEST
  const recipesUser = useSelector((state) => state.recipes); //NO SOGRAIM
  console.log(recipes);
  console.log(recipesUser.recipesDb);

  const [fromAPIPopup, setFromAPIPopup] = useState(false);
  //END TEST

console.log(value);

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
    <div className="all-recipes">
      <Search></Search>
      <h1>search results for:  <p style={{ 'color': 'rgb(13, 49, 82)', 'display': 'inline' }}>{value}</p></h1>
      <h1>RECIPES FROM USERS</h1>
      <div className="recipe">
        {recipesUser.recipesDb && recipesUser.recipesDb.map((recipe, i) =>
        (
          <HomeBody key={i} index={i}
            image={recipe.imgUrl} label={recipe.recipename} 
            dishType="TEMP TEST" recipe={recipe} 
            handleClick={setDisplaySingle}
            updateIndex={setIndex}
            triggerPopup={togglePopup}
            fromAPI={false}
            setFromAPIPopup={setFromAPIPopup}
          />
        ))}
      </div>
      <h1>RECIPES FROM EDAMAM</h1>
      <div className="recipe">
        {recipes ? recipes && recipes.map((recipe, i) =>
        (
          <HomeBody key={i} index={i}
            image={recipe.recipe.image} label={recipe.recipe.label} 
            dishType={recipe.recipe.dishType} recipe={recipe.recipe} 
            handleClick={setDisplaySingle}
            updateIndex={setIndex}
            triggerPopup={togglePopup}
            fromAPI={true}
            setFromAPIPopup={setFromAPIPopup}
          />
        )) : <div className='APIServersError'><h2>"EDAMAM SERVERS ARE NOT AVAILABLE FOR NOW. PLEASE TRY LATER"</h2></div>}
      </div>
      {isOpen && <Popup
      content={<>{ fromAPIPopup ?
      <SingleRecipe recipe={recipes[currentIndex].recipe} goBack={setBack} fromAPI={true}></SingleRecipe>
      :
      <SingleRecipe recipe={recipesUser.recipesDb[currentIndex]} goBack={setBack} fromAPI={false}></SingleRecipe>}
      </>}
      handleClose={togglePopup}
    />}
    </div>
  </div>
  );
}

export default Home;