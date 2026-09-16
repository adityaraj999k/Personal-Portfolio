import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

