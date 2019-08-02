import React from 'react';
import {
    Link
} from 'react-router-dom';

const Welcome_Home = () => (
    <div className="welcome_home">
        <div className="wrapper">
         <h1>Lo mejor para tus mascotas</h1>
         <h2>PetsDom te da la bienvenida</h2>
         <h2>Lium lorem ipsum</h2>
         <Link to="/productos" className="pink">Ir a Nuestra Tienda</Link>
         </div>
    </div>
);

export default Welcome_Home;