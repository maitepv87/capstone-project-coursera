import "./styles/layout.css";

import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { Footer, Header } from "./components";

function App() {
  return (
    <div className="layout">
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
