import { Header } from "./components/Header";
import { Home } from "./components/Home";
import "./main.css";
import { Routes, Route } from "react-router-dom";
import { Pokedex } from "./components/Pokedex";
import { Legendaries } from "./components/Legendaries";
import { Documentation } from "./components/Documentation";

function App() {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/legendaries" element={<Legendaries />} />
        <Route path="/Documentation" element={<Documentation />} />
      </Routes>
    </div>
  );
}

export default App;
