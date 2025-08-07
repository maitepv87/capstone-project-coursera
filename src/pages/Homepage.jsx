import "../styles/layout.css";
import { Hero, Specials, Testimonials, About } from "../components";

export const Homepage = () => {
  return (
    <>
      <Hero />
      <main className="main-content">
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
};
