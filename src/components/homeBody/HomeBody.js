import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { initializeArray } from "./../store/homeReducer";
import { useState, useEffect } from 'react'
import './HomeBody.css';

/*const HomeBody = () => {
    const { error, isPending, data: recipes } = useFetch('http://localhost:8000/recipes')
    const { homeArray } = useSelector((state) => state.searchReducer);
    const dispatch = useDispatch();
    // const [searchResult, setSearchResult] = useState("");

    useEffect(()=>{
        dispatch(initializeArray(recipes));
        console.log(recipes);
    }, [recipes])

    return (
         <div className="homeBody">
        {homeArray}
         </div>

     );

     return ( 

     );
}
 
export default HomeBody;*/

const HomeBody = ( { recipes }) => {
    return ( 
    <div className="recipe">
    {recipes.map(recipe => (
      <div className="recipe-preview" key={recipe.id} >
          <img src={recipe.img} class="img recipe-img" alt=""></img>
          <h5>{ recipe.title }</h5>
          <p>Written by { recipe.author }</p>
      </div>
    ))}
  </div> );
}
 
export default HomeBody;