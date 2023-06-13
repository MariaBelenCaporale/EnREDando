import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import QueHacemos from './Pages/QueHacemos/QueHacemos';
import QuienesSomos from './Pages/QuienesSomos/QuienesSomos';
import QueOfrecemos from './Pages/QueOfrecemos/QueOfrecemos';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path="/QueHacemos" element={<QueHacemos />} />
          <Route path="/QueOfrecemos" element={<QueOfrecemos />} />

          
          {/* <Route path="/Experiencias" element={<Experiencias />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path='/Cart' element={<Cart />} /> */}
        </Routes>
   <Footer />
    </BrowserRouter>  
  );
}

export default App;
