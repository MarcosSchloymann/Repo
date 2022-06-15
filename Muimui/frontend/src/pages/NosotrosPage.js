import '../styles/components/pages/NosotrosPage.css'
import React from "react";
const NosotrosPage = (props) => {
    return (
        <main class="holder">
        <h2>Nosotros</h2>
        <div className="nosotros">
            <div class="we">
                <div className="sucursal">
                    <h2>Nuestra Sucursal</h2>
                    <img src="img/Nuestra sucursal.JPG" alt=""/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat mollitia quaerat quos voluptas
                        pariatur nesciunt, odio ad totam ipsam repudiandae.</p>
                </div>
                <div classNaem="trabaja">
                    <h2>Trabaja con Nosotros</h2>
                    <img src="img/Trabaja con nosotros.JPG" alt=""/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea asperiores, ex quos numquam rerum
                        nobis culpa quis atque suscipit tenetur!
                    </p>
                </div>
            </div>
        </div>
    </main>
    );
}

export default NosotrosPage