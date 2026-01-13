import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact'; 
import Footer from './components/common/Footer'; 
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            {/* The Lead's Routes */}
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            
            {/* Your Route */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;