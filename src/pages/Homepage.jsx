import {
  Hero,
  ChicagoSection,
  Testimonials,
  Specials,
  About,
} from "../components";

export const Homepage = () => {
  return (
    <main>
      <Hero />
      <ChicagoSection />
      <Specials />
      <Testimonials />
      <About />
    </main>
  );
};
