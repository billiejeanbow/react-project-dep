import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/players">Player Search</NavLink>
        </li>
        <li>
            <NavLink to="/membership"> Become a Member</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;