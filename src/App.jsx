import {BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import UserLog from './components/UserLog';
import FetchMemes from './components/FetchMemes';


import './App.css'

function App() {
   return (
    <BrowserRouter>
    <NavBar />
   <Routes>
    <Route path='*' element= {<HomePage />}/>
   <Route path='/login' element={<UserLog />}/>
   <Route path='/memes' element={<FetchMemes />} />
   </Routes>
   </BrowserRouter>
  
  )
}

export default App
