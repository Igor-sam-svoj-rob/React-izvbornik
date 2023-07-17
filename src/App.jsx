import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Izvestaji from "./pages/Izvestaji";
import Proizvodi from "./pages/Proizvodi";
import Tim from "./pages/Tim";
import Poruke from "./pages/Poruke";
import Podrska from "./pages/Podrska";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/izvestaji" element={<Izvestaji />} />
          <Route path="/proizvodi" element={<Proizvodi />} />
          <Route path="/tim" element={<Tim />} />
          <Route path="/poruke" element={<Poruke />} />
          <Route path="/podrska" element={<Podrska />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
