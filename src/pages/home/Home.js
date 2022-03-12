import HomeBody from '../../components/homeBody/HomeBody';
import { useDispatch, useSelector } from "react-redux";
import { getRecipes } from "../../store/homeReducer";
import { searchValue } from "../../store/searchReducer";
import { useState, useEffect } from 'react'
import './Home.css'
import Search from '../../components/search/Search'


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

  return (

    <div className="container-recipes">
      <Search></Search>
      <h1>search results for:  <p style={{ 'color': 'rgb(13, 49, 82)', 'display': 'inline' }}>{value}</p></h1>

      <div className="recipe">
        {recipes && recipes.map((recipe, i) =>
        (
          <HomeBody key={i} index={i}
            image={recipe.recipe.image} label={recipe.recipe.label} dishType={recipe.recipe.dishType}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;