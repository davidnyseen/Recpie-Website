// import { useEffect, useState } from "react";
// import './createRecipe.css'
// import { useForm } from "react-hook-form";
// import FileUploader from '../../components/fileUploader/FileUploader'
// const CreateRecipe = () => {
//   const [file, setFile] = useState();
//   const [imagsFromServer, setImagsFromServer] = useState([]);
//   const [recipename, setname] = useState('');
//   const [ingredient, setIngredient] = useState('');
//   const [ingredients, setIngredients] = useState([]);
//   const [mealType, setmealType] = useState('breakfest');
//   const [directions, setdirections] = useState(' ');
//   const [preprationtime, setpreprationtime] = useState(' ');
//   const formData = new FormData();


  
//   async function test(url, headers, info){
//     return fetch(url, {
//       method: 'post',
//       credentials: 'include',
//       headers : headers,
//       body : info
//     })
//     .then(res => res.json())
//     .then(res => {
//         console.log("???????????????????")
//         console.log(res)
      
      
//     })
//     .catch((error) => {
//       console.log(error)
//     });
//   }
//   useEffect(() => {
//     const info = JSON.stringify(
//       'hi'
//     );
//     const res = test('http://localhost:5000/test', 
//     {
//       // 'Accept': 'application/json',
//       // 'Content-Type': 'application/json'
//     },
//     info,
//     );
//   }, [])
//   async function handleSubmit(e) {
//     e.preventDefault();

//     const value = JSON.stringify({
//       recipename, ingredients,
//       mealType, directions, preprationtime
//     });
//     fetch('http://localhost:5000/submitNewRecipe', {
//       method: 'post',
//       credentials: 'include',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: value,
//     })
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error('Something went wrong submitNewRecipe');
//         }
//       })
//       .catch((error) => {
//         console.log(error)
//       });

//       formData.append('image', file);
//       // console.log(formData)
//     fetch('http://localhost:5000/submitNewImage', {
//       method: 'post',
//       credentials: 'include',
//       headers: {
//         'Accept': 'application/json',
//       },
//       body: formData,
//     })
//       .then(res => res.json())
//      .then(res => {
//       setImagsFromServer([res.imagePath, ...imagsFromServer])
//      }
//       )

//   }
//   function addingredient() {
//     setIngredients(ingr => [...ingr, ingredient])
//   }
//   const fileSelected = event => {
//     const file = event.target.files[0]
//     setFile(file);
//   }


//   return (
//     <div className="create">
//       <h1>Add a New Recipe</h1>
//       <form onSubmit={handleSubmit} encType="multipart/form-data">
//         <label className="label">Recipe name:</label>
//         <input 
//           className="input"
//           type="text"
//           required
//           value={recipename}
//           onChange={(e) => setname(e.target.value)}
//         />

//         <label className="label">preparation time:</label>
//         <select
//           value={preprationtime}
//           onChange={(e) => setpreprationtime(e.target.value)}
//         >
//           <option value="0.5">half an hour</option>
//           <option value="1">1 hour</option>
//           <option value="1.5">1.5 hours</option>
//           <option value="2">2 hours</option>
//           <option value="2.5">2.5 hours</option>


//         </select>
//         <label className="label">ingredients:</label>
//         <div className="ingredient">
//           <input
//             className="input" 
//             value={ingredient}
//             onChange={(e) => setIngredient(e.target.value)}
//           ></input>
//           <button type="button" onClick={addingredient}>add ingredient</button>
//         </div>
//         <ul>{ingredients && ingredients.map(
//           (ingr, i) => (
//             <li key={i}>{ingr}</li>
//           ))}
//         </ul>

//         <label className="label">mealType:</label>
//         <select
//           value={mealType}
//           onChange={(e) => setmealType(e.target.value)}
//         >
//           <option value="breakfest">breakfest</option>
//           <option value="lunch">lunch</option>
//           <option value="dinner">dinner</option>

//         </select>
//         {/* add directions */}
//         <label className="label" style={{ marginTop: "30px" }}>add directions:</label>
//         <textarea rows="5" cols="50" name="comment" form="usrform"
//           value={directions} placeholder="pizza"
//           onChange={(e) => setdirections(e.target.value)}>
//         </textarea>

//         <label className="picture" >upload a picture of your recipe:</label>

//         <input onChange={fileSelected} type="file"
//           multiple="multiple"
//           className="picture"
//           id="picture" name="picture" accept="image/*"></input>

//         <button className="sendrecipe">Add Recipe</button>
//       </form>
//       <div>
//         {imagsFromServer.map(image => (
//           <div key={image}>
//             <img src={image}></img>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CreateRecipe;