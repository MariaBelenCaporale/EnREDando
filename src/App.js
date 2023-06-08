import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import QuienesSomos from './Pages/QuienesSomos/QuienesSomos';
function App() {
  return (
    <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />

          
          {/* <Route path="/Experiencias" element={<Experiencias />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path='/Cart' element={<Cart />} /> */}
        </Routes>
      {/* <Footer /> */}
    </BrowserRouter>  
  );
}

export default App;
