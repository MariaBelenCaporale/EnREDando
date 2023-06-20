import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import QueHacemos from './Pages/QueHacemos/QueHacemos';
import QuienesSomos from './Pages/QuienesSomos/QuienesSomos';
import QueOfrecemos from './Pages/QueOfrecemos/QueOfrecemos';
import Footer from './components/Footer/Footer';
import Agenda from './Pages/Agenda/Agenda';
import Colaboracion from './Pages/Colaboracion/Colaboracion';
import Contacto from './Pages/Contacto/Contacto';
function App() {
  return (
    <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path="/QueHacemos" element={<QueHacemos />} />
          <Route path="/QueOfrecemos" element={<QueOfrecemos />} />
          <Route path="/Agenda" element={<Agenda />} />
          <Route path="/Colaboracion" element={<Colaboracion />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
        
        <Footer />
    </BrowserRouter>  
  );
}

export default App;
