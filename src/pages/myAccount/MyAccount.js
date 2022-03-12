import CreateRecipe from "../../myAccountComp/createRecipe/CreateRecipe";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UseProtectedFetch from '../../customHooks/UseProtectedFetch'
import fetchGet from '../../utils/fetchGet'
import "./myAccount.css";
import MyRecipes from '../../myAccountComp/myRecipes/MyRecipes';

const MyAccount = () => {
    const [recipes, setRecipes] = useState([])
    const [log, setlog] = useState(false)
    let navigate = useNavigate(); // like href
    const { login } = useSelector((state) => state.login);


     UseProtectedFetch(); // this is a protected route
useEffect(()=>{
    console.log(recipes);
},[recipes])

    useEffect(async () => {

        return fetchGet('http://localhost:5000/myAccount')
            .then(res => res.json())
            .then((res) => (setRecipes([...res])))
        
    }, [])


    return (
        <div>
            <h1>My account</h1>
            <div className="username">{login.user && <h2>welcome {login.user}</h2>}</div>
            <div><h2>my uploads</h2>
            </div>
            <div>
                <MyRecipes recipes={recipes} />
            </div>
        </div>
    );
}

export default MyAccount;