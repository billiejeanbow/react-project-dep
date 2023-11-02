import {BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import UserLog from './components/UserLog';
import PlayerStatsSearch from './components/Players';



import './App.css'

function App() {
   return (
  
    <BrowserRouter>
    <NavBar />
   <Routes>
    <Route path='*' element= {<HomePage />}/>
   <Route path='/login' element={<UserLog />}/>
   <Route path='/players' element={<PlayerStatsSearch />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
