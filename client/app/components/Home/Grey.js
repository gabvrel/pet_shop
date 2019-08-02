import React from 'react';
import {
    Link
} from 'react-router-dom';

const Grey_back = () => (
    <div className="grey_back">
        <div className="welcome_product wrapper">
            <div className="shadow">
                <div className="shadow_1">
                <h2 style={{marginTop:'0px'}}>Vera Brandley</h2>
                <p>
                Carry the day in style with this extra large total crafted in our chic B.B. Collection textured PVC. Featuring colorful faux leather trim, this tote offers a roomy interior plus just enoung perfectly placed
                </p>
                <Link to="/productos" className="pink2">Ver tienda</Link>
                </div>
                <div className="shadow_2">
                </div>
            </div>
        </div>
    <div className="welcome_collage wrapper">
        <div className="wow flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front wow_1 ">
                    <h2>GUAU!</h2>
                    <p>Lo que necesita tu mascota</p>
                </div>
                <div className="flip-card-back">
                   <h1>wow2</h1>
                </div>
            </div>
        </div>
        <div className="banner_right">
            <div className="doctor_back">
            </div>
            <div className="doctor_desc">
            <h1>Let the game begin</h1>
            <h3>Registration is on - get ready for open</h3>
            <Link to="/productos" className="pink2"> Registrase </Link>
            </div>
        </div>
        <div className="wow_2 flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front dog_back">
                   <h1>wow1</h1>
                </div>
                <div className="flip-card-back">
                   <h1>wow2</h1>
                </div>
            </div>
        </div>
    </div>
</div>

);

export default Grey_back;