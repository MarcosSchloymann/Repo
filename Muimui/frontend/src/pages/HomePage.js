import '../styles/components/pages/HomePage.css'
import React from "react";
const HomePage = (props) => {
    return (
        <main className="holder">
<h2>Helados Artesanales y Café de Especialidad</h2>
        <div class="home">
            <div class="heladoimg">
                <img src="img/Helado.JPG" alt="Helados Artesanales"/>
                <h2>Helados Artesanales</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo velit sit tempora, accusantium iusto
                    aliquam ut laudantium consectetur nisi cumque non alias distinctio, quis odit blanditiis vitae
                    deleniti, explicabo dicta.</p>
            </div>
            <div class="cafeimg">
                <img src="img/cafe.JPG" alt="Cafe de Especialidad"/>
                <h2>Café de Especialidad</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum libero accusantium quibusdam unde ea
                    saepe aut, labore asperiores eaque magni animi quasi ratione, molestias, quo aspernatur hic nihil
                    veniam. Earum?</p>
            </div>
        </div>
        </main>
    );
}

export default HomePage