import React from 'react';

const Subscribe = () => (
    <div className="subscribe">
        <div className="subs_text">
            <h2>10% Discount for your subscription</h2>
            <p>Carry the day in style with this extra-large tote crafted in our<br/>
            chic B.B. Collection textured PVC. Featuring colorful faux<br/> leather trim, this tote offers a rommy interior</p>
            <input type="email" text="email" placeholder="Your e-mail here"/>
            <button onClick={()=>alert('xd')} className="pink2">Subscribe</button>
        </div>
    </div>
);

export default Subscribe;