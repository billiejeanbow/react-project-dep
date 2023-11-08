import  { useState, useEffect } from 'react';

function SavedPlayers() {
  const [savedPlayers, setSavedPlayers] = useState([]);

  useEffect(() => {
    const savedPlayersFromLocalStorage = JSON.parse(localStorage.getItem('savedPlayers')) || [];
    setSavedPlayers(savedPlayersFromLocalStorage);
  }, []);
  const deletePlayer = (index) => {
    const updatedPlayers = [...savedPlayers];
    updatedPlayers.splice(index, 1);
    setSavedPlayers(updatedPlayers);
    localStorage.setItem('savedPlayers', JSON.stringify(updatedPlayers));
  };

//   if (savedPlayers.length === 0) {
//     window.alert("No players saved. Please use the 'Player Search' to add your favourite");
//   }

  return (
    <div className="saved-players">
      <h1>Saved Players</h1>
     <ul className="saved-player-list">
        {savedPlayers.map((player, index) => (
          <li key={index}>
            <h2>{player.first_name} {player.last_name}</h2>
            <a className='player-link' href="https://www.nba.com/stats/player/2544" target="_blank">Player Profile</a>
            <button onClick={() => deletePlayer(index)}>Delete Player</button>
          </li>
        ))}
      </ul>
      </div>
  );
}

export default SavedPlayers;
