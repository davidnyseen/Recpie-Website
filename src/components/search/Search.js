import { useState, useEffect } from 'react'
import './search.css'
import { useDispatch, useSelector } from "react-redux";
import { searchValue } from "../../store/searchReducer";

function Search() {
    const { value } = useSelector((state) => state.searchReducer);
    const dispatch = useDispatch();
    const [searchResult, setSearchResult] = useState("search for recipes...");

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(searchValue(searchResult))
        // setSearchResult("")
    }

    return (
        <div className='search-form'>
            <form className="search-form" onSubmit={handleClick}>
                <input className="search-bar" type="text"
                    value={searchResult}
                    onChange={(e) => setSearchResult(e.target.value)} />
                <button className="search-button"
                >search</button>
            </form>
            <h1> The count is: {value}</h1>
        </div>
    );
}
export default Search;
