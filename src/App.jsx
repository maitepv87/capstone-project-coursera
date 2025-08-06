import "./styles/layout.css";
import { BookingProvider } from "./context/BookingContext";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import { Footer, Header } from "./components";

function App() {
  return (
    <div className="layout">
      <BookingProvider>
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer />
        </BrowserRouter>
      </BookingProvider>
    </div>
  );
}

export default App;
