import React, { useState, useEffect, useContext } from 'react';
import {
    Link, Redirect
} from 'react-router-dom';
import {ShopContext} from '../context/GlobalState';
import M from "materialize-css";


const CheckOut = (props) => {
    const [state, setState] = useState({ redirect: false });
    let products = props.location.state.det.products;
    const [ ,dispatch] = useContext(ShopContext);

    useEffect(() => {
        M.AutoInit();
        setState({
            price: props.location.state.price,
            products: products
        });
    }, [])


    const setVal = (e) => {
        let { name, value } = e.target;
        try {
            setState({ ...state, [name]: value })
        } catch (e) {
            console.log(e);
        }
    };

    const check = (e) => {
        fetch('/checkout', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .catch(err => console.log(`error: ${err}`));
        test();
        e.preventDefault();
    };

    const test = () => {
        const elem = document.getElementById('modal1');
        const instance = M.Modal.getInstance(elem);
        dispatch({type: 'RESET'});
        instance.open();
        setTimeout(() => {
            window.scrollTo(0, 0);
            setState({
                redirect: true
            })
        }, 2000);
    };

    return (
        state.redirect === true ? <Redirect to='/' /> :
            <div className="wrapper">
                <h1>Ingrese su Datos para realizar la compra</h1>
                <form onSubmit={(Event) => check(Event)}>
                    <div class="row">
                        <div className="input-field col s12">
                            <input type="text" name="name" className="validate" required={true} onChange={(Event) => setVal(Event)} /> <br />
                            <label for="name">Nombre</label>
                        </div>
                    </div>
                    <div class="row">
                        <div className="input-field col s6">
                            <input type="tel" name="phone" required={true} onChange={(Event) => setVal(Event)} /> <br />
                            <label for="phone">Telefono</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="email" name="email" required={true} onChange={(Event) => setVal(Event)} /> <br />
                            <label for="email">Email</label>
                            <span class="helper-text" data-error="Correo Invalido" data-success="right">Ingrese un correo valido</span>
                        </div>
                    </div>
                    <div class="row">
                        <div className="input-field col s12">
                            <textarea name="dir" className="materialize-textarea" required={true} onChange={(Event) => setVal(Event)} /><br />
                            <label for="dir">Direccion del Envio</label>
                        </div>
                    </div>
                    <button data-target="modal1" className="pink2" type='submit'>Comprar</button>
                </form>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Compra Realizada</h4>
                        <p>Gracias por efectuar su compra, pronto recibira la confirmacion a su correo electronico y estaremos en contacto con usted</p>
                    </div>
                </div>
            </div>
    )
};

export default CheckOut;