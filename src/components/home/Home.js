import HomeBody from './../homeBody/HomeBody';
import useFetch from "../hooks/useFetch";
import './Home.css'


const Home = () => {
    const { error, isPending, data: recipes } = useFetch('http://localhost:8000/recipes')

    return ( 
    <div className="container">
        { recipes && <HomeBody recipes={recipes} /> }
    </div>
     );
}
 
export default Home;