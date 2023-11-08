import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-icon">&#x1F3C0;</div>
     
      <ul>
        {/* <li>
          <NavLink to="/home">Home</NavLink>
        </li> */}
        <li>
          <NavLink to="/players">Player Search</NavLink>
        </li>
        <li>
          <NavLink to="/favorites">Your Favorite Players</NavLink>
        </li>
        <li>
          <NavLink to="/membership"> GOTHOOPS? Membership</NavLink>
        </li>
        <li>
          <NavLink to="/livegame">Watch Highlights</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
