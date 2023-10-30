import { useState, useEffect } from 'react';

function FetchMeme() {
  const [memeData, setMemeData] = useState(null);
  const [memeIdInput, setMemeIdInput] = useState('');
  const [searchedMemeId, setSearchedMemeId] = useState(null);

  useEffect(() => {
    async function fetchMeme() {
      try {
        const response = await fetch(`http://alpha-meme-maker.herokuapp.com/memes/:id`);
        if (response.ok) {
          const data = await response.json();
          setMemeData(data.data);
        } else {
          console.error('Failed to fetch meme data');
          setMemeData(null); 
        }
      } catch (error) {
        console.error('Error:', error);
        setMemeData(null);
      }
    }

    if (searchedMemeId !== null) {
      fetchMeme();
    }
  }, [searchedMemeId]);

  const handleSearch = () => {
    if (memeIdInput.trim() !== '') {
      setSearchedMemeId(parseInt(memeIdInput, 10));
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter Meme ID"
          value={memeIdInput}
          onChange={(e) => setMemeIdInput(e.target.value)}
        />
        <button onClick={handleSearch}>Search Meme</button>
      </div>

      {memeData ? (
        <div>
          <h1>{memeData.name}</h1>
          <img src={memeData.image} alt={memeData.name} />
          <p>{memeData.detail}</p>
          <p>{memeData.tags}</p>
          <p>{memeData.topText}</p>
          <p>{memeData.bottomText}</p>
        </div>
      ) : searchedMemeId ? (
        <p>Loading meme data...</p>
      ) : null}
    </div>
  );
}

export default FetchMeme;
