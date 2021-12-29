import useFetch from "../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { initializeArray } from "./../store/homeReducer";
import { useState, useEffect } from 'react'

const HomeBody = () => {
    const { error, isPending, data: recipes } = useFetch('http://localhost:8000/recipes')
    const { homeArray } = useSelector((state) => state.searchReducer);
    const dispatch = useDispatch();
    // const [searchResult, setSearchResult] = useState("");

    useEffect(()=>{
        dispatch(initializeArray(recipes))
        console.log(recipes)
    }, [recipes])

    return (
         <div className="homeBody">
        {homeArray}
         </div>

     );
}
 
export default HomeBody;