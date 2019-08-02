import React, {useContext, useEffect} from 'react';
import {ShopContext} from '../context/GlobalState';
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../../styles/cart.scss';
import M from "materialize-css";

const Cart = () => { 
    const [state, dispatch] = useContext(ShopContext);
    let sum = 0;
    const hi = (val) => {
        sum+= val
        return undefined;
    };
    return(
        <div className="wrapper">
        {state.products === undefined ? <div>No hay nada eh na </div> : state.products.map( product =>
            <div className="cart_Product">
            <h3>{product.name}</h3>
            <img src={product.image} alt="test"/>
            <p>${product.price}</p>
            <button onClick={()=> {
                M.toast({html: 'Eliminado!'})
                dispatch({type:'REMOVE', productId: product._id})
            }}><FaTrash/></button>      
            {hi(product.price)}
            </div>)}
            <h1>Tu compra es de un total de: ${sum}</h1> 
            <Link to={{
                pathname: `/checkout`,
                state: {price: sum, det: state}
            }} className="pink2">Comprar</Link>
        </div>
    )
};

export default Cart;