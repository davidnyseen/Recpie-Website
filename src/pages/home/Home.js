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
    dispatch(getRecipes(value));
    //}
  }, [value]);

  return (

    <div className="container-recipes">
      <Search></Search>
      <h1>Recipes for: {value}</h1>

      <div className="recipe">
        {recipes && recipes.map((recipe, i) =>
        (
          <HomeBody recipe={recipe} key={i} index={i}/>
        ))}
      </div>
    </div>
  );
}

export default Home;