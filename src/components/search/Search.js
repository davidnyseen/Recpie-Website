import { useState, useEffect } from 'react'
import './search.css'
import { useDispatch, useSelector } from "react-redux";
import { searchValue } from "./../store/searchReducer";

function Search() {
    const { searchValue } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const [chat, setChat] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(searchValue(chat))
        setChat("")
    }

    return (
        <div className='search-form'>
            <form className="" onSubmit={handleClick}>
                <input className="search-bar" type="text"
                    value={chat}
                    onChange={(e) => setChat(e.target.value)} />
                <button className="search-button"
                >submit</button>
            </form>
            <h1> The count is: {searchValue}</h1>
        </div>
    );
}
export default Search;
