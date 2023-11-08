import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/pages/HomePage";
import UserLog from "./components/pages/UserLog";
import PlayerStatsSearch from "./components/pages/Players";
import Shop from "./components/pages/MemStore";
import SavedPlayers from "./components/pages/SavedPlayers";
// import Footer from "./components/Footer";
import Rookie from "./components/pages/Rookie";
import Starter from "./components/pages/Starter";
import Star from "./components/pages/Star";
import LiveGame from "./components/pages/LiveGame";
import About from "./components/pages/About";
import EventCal from "./components/pages/Calendar";

import "./App.css";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<UserLog />} />
        <Route path="/players" element={<PlayerStatsSearch />} />
        <Route path="/membership" element={<Shop />} />
        <Route path="/favorites" element={<SavedPlayers />} />
        <Route path="/rookie" element={<Rookie />} />
        <Route path="/starter" element={<Starter />} />
        <Route path="/star" element={<Star />} />
        <Route path="/livegame" element={<LiveGame />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/eventcal" element={<EventCal />}></Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
