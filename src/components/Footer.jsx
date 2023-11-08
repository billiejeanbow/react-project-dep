import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-tabs">
        <ul>
          <li>
            <NavLink to="/about">About GOTHOOPS?</NavLink>
          </li>
          <li>
            <NavLink to="/eventcal">Events</NavLink>
          </li>
        </ul>
      </div>

      <p className="footer-copy">&copy; Billie-Jean Bowdery 2023</p>
    </footer>
  );
}

export default Footer;
