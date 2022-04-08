import CreateRecipe from "../../myAccountComp/createRecipe/CreateRecipe";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UseProtectedFetch from '../../customHooks/UseProtectedFetch'
import fetchGet from '../../utils/fetchGet'
import "./myAccount.css";
import MyRecipes from '../../myAccountComp/myRecipes/MyRecipes';
import HomeBody from "../../components/homeBody/HomeBody";
import Popup from "../../components/Popup/Popup";
import SingleRecipe from "../singleRecipe/SingleRecipe";

const MyAccount = () => {
    const [recipes, setRecipes] = useState([])
    const [log, setlog] = useState(false)
    let navigate = useNavigate(); // like href
    const { login } = useSelector((state) => state.login);
    let logd = false;

    UseProtectedFetch(); // this is a protected route
    useEffect(() => {
        console.log(recipes);
    }, [recipes])

    useEffect(() => {
        let cancel = false;
        fetchGet('http://localhost:5000/myAccount')
            .then((res) => {
                if(cancel) return;
                setRecipes([...res])
            })
return()=>{
    cancel = true
}
    }, [])

console.log(recipes);

  //ADDED SINCE 06/04/2022
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
        <div>
            <h1>My account</h1>
            <div className="username">{login.user && <h2>welcome {login.user}</h2>}</div>
            <div><h2>my uploads</h2>
            </div>
            <div className="container-recipes">
  
                <div className="recipe">
                    {recipes && recipes.map((recipe, i) =>
                    (
                    <HomeBody key={i} index={i}
                        image={recipe.imgUrl} label={recipe.recipename}
                        dishType={recipe.mealType} recipe={recipe}
                        handleClick={setDisplaySingle}
                        updateIndex={setIndex}
                        triggerPopup={togglePopup}
                        curr_ID = {recipe._id}
                    />
                    ))}
                </div>
                {isOpen && <Popup
                content={<>
                <SingleRecipe recipe={recipes[currentIndex]} goBack={setBack} fromAPI={false}></SingleRecipe>
                </>}
                handleClose={togglePopup}
                />}
            </div>
        </div>
    );
}

export default MyAccount;