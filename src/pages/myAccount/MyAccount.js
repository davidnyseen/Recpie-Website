import CreateRecipe from "../../myAccountComp/createRecipe/CreateRecipe";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./myAccount.css"
const MyAccount = () => {
    let navigate = useNavigate(); // like href

    useEffect(() => {
        const func = async () =>{
         try {
            const res = await fetch('http://localhost:5000/protctedroute', 
            {
                credentials: 'include',

            })
            const data = await res.json();
            console.log('in handlelogout: = '+data)

            if (!data) {
                navigate('/');
            }
        }
        catch {
            console.log('cannt reach protected route');
            navigate('/');

        }
    }
    func();
    }, [])

    return (
        <div>
            <h1>My account</h1>
            
        </div>
    );
}

export default MyAccount;