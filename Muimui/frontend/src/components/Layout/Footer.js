import React from "react";
const Footer = (props) => {
    return (
        <div className="holder">
            <div className="pie">
                <div className="sello">
                    <p>2022 Muimui</p>
                    <p>Todos los derechos reservados</p>
                </div>
                <div className="redes">
                    <p>Seguinos</p>
                    <nav className="follow">
                        <ul>
                            <a href="#" target="_blank">
                                <img src="/img/facebook.jpg"></img>
                            </a>
                            <a href="#" target="_blank">
                                <img src="/img/Instagram.jpg"></img>
                            </a>
                            <a href="#" target="_blank">
                                <img src="/img/twitter.jpg"></img>
                            </a>
                        </ul>
                    </nav>
                </div>
            </div>            
        </div>
    );
}

export default Footer