import { useState, useEffect } from "react";



function FetchMemes() {
    const [memes, setMemes] = useState([]);
    const apiUrl = 'https://api.imgflip.com/search_memes';
  
    useEffect(() => {

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setMemes(data.data.memes);
          } 
        })
        .catch((error) => {
          console.error('Error fetching memes:', error);
        });
    }, []);
  
    return (
      <div>
        <h2>Your Meme of the day...</h2>
        <ul>
          {memes.map((meme) => (
            <li key={meme.id}>{meme.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default FetchMemes;