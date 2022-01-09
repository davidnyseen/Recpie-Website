import CreateRecipe from "../../myAccountComp/createRecipe/CreateRecipe";
import { Link } from "react-router-dom";
import "./myAccount.css"
const MyAccount = () => {
    return ( 
        <div>
            <h1>My account</h1>
            <div>
                <div className="card">
                    <h2>create recipe</h2>
                    <div><Link to="create">Create recipe</Link></div>
                </div>
            </div>
        </div>
     );
}
 
export default MyAccount;