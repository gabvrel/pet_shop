import React from 'react';
import '../../styles/footer.scss';

const Footer = () => (
    <div className="footer wrapper">
        <div>
            <h2>Preguntas?</h2>
            <ul>
            <li>Ayuda</li>
            <li>Trabaja con Nosotros</li>
            <li>Nuestros Profesionales</li>
            </ul>
        </div>
        <div>
            <h2>Productos</h2>
            <ul>
            <li>Garantia</li>
            <li>Entrega</li>
            <li>Metodos de Pago</li>
            </ul>
        </div>
        <div>
            <h2>Nuestra Comunidad</h2>
            <ul>
            <li>Quienes Somos</li>
            <li>Cual es Nuestra Mision</li>
            <li>En Donde Nos Encontramos</li>
            <li>Como puedes ayudarnos</li>
            </ul>
        </div>
        <div>
        <p>© 2019 PetsDom Copyright</p>
        </div>
    </div>
);

export default Footer;