import '../../styles/components/layout/Header.css';
import React from "react";
import Nav from './Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import NosotrosPage from '../../pages/NosotrosPage';
import CartaPage from '../../pages/CartaPage';
import ContactoPage from '../../pages/ContactoPage';
import TrabajoPage from '../../pages/TrabajoPage';
import Svg from './Svg';
const Header = (props) => {
    return (
        <div className="Holder">
            <div className='header'>
                <div className="izquierda">
                    <h1>Muimui</h1>
                    <h2>Helados</h2>
                </div>
                <Svg />
            </div>
        </div>
    );
}

export default Header