//import logo from './logo.svg';
//import './App.css';
import Header from './components/Layout/Header';
import Nav from './components/Layout/Nav';
import Footer from './components/Layout/Footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import CartaPage from './pages/CartaPage';
import ContactoPage from './pages/ContactoPage';
import TrabajoPage from './pages/TrabajoPage';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="nosotros" element={<NosotrosPage/>} />
          <Route path="carta" element={<CartaPage/>} />
          <Route path="contacto" element={<ContactoPage/>} />
          <Route path="trabajo" element={<TrabajoPage/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
