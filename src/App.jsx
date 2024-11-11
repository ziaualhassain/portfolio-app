import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import ContactCard from './ContactCard';
import Footer from './Footer';
import HeroCard from './HeroCard';
import Navbar from './NavBar';
import Projects from './Projects';
import UnderConstruction from './UnderConstruction'; // If you want to enable it later

function App() {
  return (
    <Router>
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<HeroCard />} />      
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/contact" element={<ContactCard />} /> 
        <Route path="/underconstruction" element={<UnderConstruction />} /> 
      </Routes>
      
      <Footer />  
    </Router>
  );
}

export default App;
