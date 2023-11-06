import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import UserLog from "./components/UserLog";
import PlayerStatsSearch from "./components/Players";
import Shop from "./components/MemStore";
import Rookie from "./components/Rookie";
import Starter from "./components/Starter";
import AllStar from "./components/AllStar";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/login" element={<UserLog />} />
        <Route path="/players" element={<PlayerStatsSearch />} />
        <Route path="/membership" element={<Shop />} />
      </Routes>
      <Route path="/rookie" element={<Rookie />} />
      <Route path="/starter" element={<Starter />} />
      <Route path="/allstar" element={<AllStar />} />
    </BrowserRouter>
  );
}

export default App;
