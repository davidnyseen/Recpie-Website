import { useState } from "react";
import './createRecipe.css'

const CreateRecipe = () => {
  const [title, setTitle] = useState('');
  const [ingredient, setIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [mealType, setmealType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //const blog = { title, body, author };

    // fetch('http://localhost:8000/usersRecipes/', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(blog)
    // })
  }
  function addingredient() {
    setIngredients(ingr => [...ingr, ingredient])
  }

  return (
    <div className="create">
      <h1>Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>Recipe name:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>ingredients:</label>
        <div className="ingredient">
          <input
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        ></input>
          <button type="button" onClick={addingredient}>add ingredient</button>
        </div>
        <ul>{ingredients && ingredients.map(
          (ingr) => (<li>{ingr}</li>
          ))}
        </ul>

        <label>mealType:</label>
        <select
          value={mealType}
          onChange={(e) => setmealType(e.target.value)}
        >
          <option value="breakfest">breakfest</option>
          <option value="lunch">lunch</option>
          <option value="dinner">dinner</option>

        </select>
        <button>Add Recipe</button>
      </form>
    </div>
  );
}

export default CreateRecipe;