import React from 'react';
import {
    Link
} from 'react-router-dom';

const WelcomeProduct = () => (
    <div className="welcome_product wrapper">
        <div className="shadow">
            <div className="shadow_4">
            </div>
            <div className="shadow_3">
                <h2 style={{ marginTop: '0px' }}>Vera Brandley</h2>
                <p>
                    Carry the day in style with this extra large total crafted in our chic B.B. Collection textured PVC. Featuring colorful faux leather trim, this tote offers a roomy interior plus just enoung perfectly placed
                    </p>
                <Link to="/productos" className="pink2">Ver tienda</Link>
            </div>
        </div>
    </div>
);

export default WelcomeProduct;