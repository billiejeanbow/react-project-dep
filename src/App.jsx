import {BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import UserLog from './components/UserLog';
import PlayerStatsSearch from './components/Players';
import Shop from './components/MemStore';
import SavedPlayers from './components/SavedPlayers';


import './App.css'

function App() {
   return (
  
    <BrowserRouter>
    <NavBar />
   <Routes>
    <Route path='*' element= {<HomePage />}/>
   <Route path='/login' element={<UserLog />}/>
   <Route path='/players' element={<PlayerStatsSearch />} />
   <Route path='/membership' element={<Shop />} />
   <Route path='/favorites' element={< SavedPlayers/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
