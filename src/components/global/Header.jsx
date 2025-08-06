import "../../styles/global/header.css";
import logo from "../../assets/images/Logo.svg";
import { Nav } from "./Navbar";

export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon logo" />
      <Nav />
    </header>
  );
};
