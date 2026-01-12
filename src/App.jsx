import React from 'react';
import Contact from './pages/Contact'; // Imported as a page
import Footer from './components/common/Footer'; // Imported as a component

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* If you have a Navbar, put it here */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;