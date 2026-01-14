import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact'; 
import Footer from './components/common/Footer'; 

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Contact />} /> 
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;