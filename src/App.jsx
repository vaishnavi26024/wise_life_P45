import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Business from "./pages/Business";
import Contact from "./pages/Contact";

import Navbar from "./components/common/Navbar";

import "./styles.css";   // ✅ from first App.jsx
import "./App.css";      // ✅ existing App styles

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Main content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Business" element={<Business />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
