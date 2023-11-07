// import { useState } from 'react';


// function PlayerStatsSearch() {

//   const [searchTerm, setSearchTerm] = useState("");
//   const [playerStats, setPlayerStats] = useState(null);


//   const handleSearch = () => {
//     fetch(`https://www.balldontlie.io/api/v1/players?search=${searchTerm}`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.data.length > 0) {
//           const player = data.data[0];
//           setPlayerStats(player);
//         } else {
//           window.alert("Please enter a valid NBA Player's name");
//         }
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   };

//   return (
//     <div className="players-main">
//       <h1>Search for an NBA Player</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter player's name"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearch}>Search</button>
//       </div>
//       {playerStats ? (
//         <div className='player-info'>
//           <h2>{playerStats.first_name} {playerStats.last_name}</h2>
//           <p className='stats'>Team: {playerStats.team.full_name}</p>
//           <p className='stats'>City: {playerStats.team.city}</p>
//           <p className='stats'>Position: {playerStats.position}</p>
//           <p className='stats'>Height: {playerStats.height_feet} ft {playerStats.height_inches} inches</p>
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default PlayerStatsSearch;

import { useState } from 'react';

function PlayerStatsSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [playerStats, setPlayerStats] = useState(null);

  const savePlayerInfo = () => {
    if (playerStats) {
      const savedPlayers = JSON.parse(localStorage.getItem('savedPlayers')) || [];
      savedPlayers.push(playerStats);
      localStorage.setItem('savedPlayers', JSON.stringify(savedPlayers));
      console.log("Player information saved:", playerStats);
      window.alert("Saved to Your Favorite Players!");
    } else {
      window.alert("No player information to save.");
    }
  };

  const handleSearch = () => {
    fetch(`https://www.balldontlie.io/api/v1/players?search=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.data.length > 0) {
          const player = data.data[0];
          setPlayerStats(player);
        } else {
          window.alert("Please enter a valid NBA Player's name");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="players-main">
      <h1>Search for an NBA Player</h1>
      <div>
        <input
          type="text"
          placeholder="Enter player's name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {playerStats ? (
        <div className='player-info'>
          <h2>{playerStats.first_name} {playerStats.last_name}</h2>
          <p className='stats'>Team: {playerStats.team.full_name}</p>
          <p className='stats'>City: {playerStats.team.city}</p>
          <p className='stats'>Position: {playerStats.position}</p>
          <p className='stats'>Height: {playerStats.height_feet} ft {playerStats.height_inches} inches</p>
          <button onClick={savePlayerInfo}>Save to favorites</button> 
        </div>
      ) : null}
    </div>
  );
}

export default PlayerStatsSearch;
