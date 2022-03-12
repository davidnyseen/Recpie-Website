const fetchGet = (url) => {
    return fetch(url, { 
      credentials: 'include', 
      headers: {
        'Content-Type': 'application/json'
      },
    })
  };

export default fetchGet;