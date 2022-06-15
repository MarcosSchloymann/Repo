import '../styles/components/pages/ContactoPage.css'
import React from "react";
const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
        <div>
            <h2>Contacto Rápido</h2>
            <form action="" method="" className="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Mail</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Teléfono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">Mensaje</label>
                    <textarea name=""></textarea>
                </p>
                <p className="acciones"><input type="submit" value="Enviar"/></p>
            </form>
        </div>
        <div className="datos">
            <h2>Otras vías de comunicación</h2>
            <p>También pueden contactarnos usando los siguientes medios</p>
            <ul>
                <li>Teléfono: 123456789</li>
                <li>Email: aufewiufghai@asf</li>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
            </ul>
        </div>
    </main>
    );
}

export default ContactoPage