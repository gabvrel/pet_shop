import React,{useState, useEffect} from 'react';
import M from "materialize-css";
import {
    Link, Redirect
} from 'react-router-dom';
import '../../styles/products.scss';

const Contact = () => {
    const [state, setState] = useState({ redirect: false });
   
    useEffect(() => {
        M.AutoInit()}, [])

    const contact = (e) => {
        fetch('/contactos', {
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

    const setVal = (e) => {
        let { name, value } = e.target;
        try {
            setState({ ...state, [name]: value })
        } catch (e) {
            console.log(e);
        }
    };

    const test = () => {
        const elem = document.getElementById('modal2');
        const instance = M.Modal.getInstance(elem);
        instance.open();
        setTimeout(() => {
            window.scrollTo(0, 0);
            setState({
                redirect: true
            })
        }, 2000);
    };

    return (
        state.redirect === true ? <Redirect to='/' /> : <div className="wrapper">
            <h1>Ingrese su Datos y nos Contactaremos con Usted</h1>
            <form onSubmit={(Event) => contact(Event)}>
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
                        <textarea name="coments" className="materialize-textarea" required={true} onChange={(Event) => setVal(Event)} /><br />
                        <label for="dir">Comentarios</label>
                    </div>
                </div>
                <button data-target="modal1" className="pink2" type='submit'>Enviar</button>
            </form>
            <div id="modal2" className="modal">
            <div className="modal-content">
                <h4>Gracias por Contactarnos</h4>
                <p>Estaremos pronto en contacto con usted!</p>
            </div>
        </div>
        </div>)
};

export default Contact;