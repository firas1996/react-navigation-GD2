import "./App.css";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Products from "./screens/Products";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import NotFound from "./screens/NotFound";
import ProductDetails from "./screens/ProductDetails";
import CreateProduct from "./screens/CreateProduct";
import ProductsLayout from "./components/ProductsLayout";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Products" element={<ProductsLayout />}>
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetails />} />
          <Route path="create" element={<CreateProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
