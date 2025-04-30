import "./App.css";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Products from "./screens/Products";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
