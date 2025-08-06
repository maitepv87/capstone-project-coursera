import "../../styles/global/navbar.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar" aria-label="Main site navigation">
      <ul>
        <li>
          <NavLink to="/" aria-label="Go to homepage">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" aria-label="Learn more about us">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/menu" aria-label="View our menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/reservations" aria-label="Reserve a table">
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/order-online" aria-label="Order food online">
            Order online
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" aria-label="Log into your account">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
