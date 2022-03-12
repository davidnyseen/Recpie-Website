const fetchPost = (url, value) => {
    return fetch(url, {  
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({value}),
    })
  };
export default fetchPost;