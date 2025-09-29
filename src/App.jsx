import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Login from "./components/pages/Login";
import Cart from "./components/pages/Cart";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
