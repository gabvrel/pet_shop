import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'
import {GlobalState} from './components/context/GlobalState';
import Adoptions from './components/Adoptions/Adoptions';
import App from './components/App/App';
import Home from './components/Home/Home';
import Services from './components/Services/Sevices';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import * as serviceWorker from './components/App/serviceWorker';


ReactDOM.render(
    <GlobalState>
    <Router>
    <App>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/productos" component={Products}/>
    <Route path="/servicios" component={Services}/>
    <Route path="/adopciones" component={Adoptions}/>
    <Route path="/contactos" component={Contact}/>
    <Route path="/product/:id" component={Product} />
    <Route path="/cart" component={Cart} />
    <Route path="/checkout" component={CheckOut}/>
    </Switch>
    </App>
    </Router>
    </GlobalState>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
