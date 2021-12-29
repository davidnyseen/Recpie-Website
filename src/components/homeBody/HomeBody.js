import useFetch from "../hooks/useFetch";

const HomeBody = () => {
    const { error, isPending, data: recipes } = useFetch('http://localhost:8000/recipes')
    console.log(recipes);
    return ( 
        4
     );
}
 
export default HomeBody;