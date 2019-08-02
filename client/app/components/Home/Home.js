import React from 'react';
import WelcomeHome from './Welcome_Home';
import GreyBack  from './Grey';
import Subscribe from './Subscribe';
import '../../styles/home.scss';


const Home = () => (
    <div className="home">
        <WelcomeHome/>
        <GreyBack/>
        <Subscribe/>
    </div>
)

export default Home;