const fetchRecipes = (value) => {
    return fetch('http://localhost:5000', {  
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value}),
    })
  };

export default fetchRecipes;