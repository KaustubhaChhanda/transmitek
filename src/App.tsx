import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Global sticky header navigation */}
        <Navbar />

        {/* Dynamic page viewport */}
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback path redirecting back to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global structured footer links */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
