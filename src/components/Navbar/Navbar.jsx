import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home", aria: "Go to homepage" },
  { path: "/about", label: "About", aria: "Learn more about us" },
  { path: "/menu", label: "Menu", aria: "View our menu" },
  { path: "/reservations", label: "Reservations", aria: "Reserve a table" },
  { path: "/order-online", label: "Order online", aria: "Order food online" },
  { path: "/login", label: "Login", aria: "Log into your account" },
];

export const Navbar = () => {
  return (
    <nav className={styles.navbar} aria-label="Main site navigation">
      <ul>
        {navItems.map(({ path, label, aria }) => (
          <li key={path}>
            <NavLink to={path} aria-label={aria}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
