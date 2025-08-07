import styles from "./Homepage.module.css";
import { Hero, Specials, Testimonials, About } from "../../components";

export const Homepage = () => {
  return (
    <>
      <Hero />
      <main className={styles.homepage}>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
};
