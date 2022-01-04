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
  
useEffect(() =>{
  // console.log("searchValue = " + value)
  setSearchResult(value)
  dispatch(getRecipes(value));
},[value])

  return (

    <div className="container-recipes">
      <Search></Search>

      <h1>Recipes {value}</h1>
      {recipes && <HomeBody recipes={recipes} />}
    </div>
  );
}

export default Home;