import React from "react";
import { Link } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/carta">Carta</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="trabajo">Trabaja con Nosotros</Link></li>
                </ul>
            </div>
        </nav>
   );
}

export default Nav