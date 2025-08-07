import styles from "./Header.module.css";
import logo from "../../assets/images/Logo.svg";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Little Lemon logo" />
      <Navbar />
    </header>
  );
};
