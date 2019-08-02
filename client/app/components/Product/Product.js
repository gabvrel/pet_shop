import React, { useContext } from 'react';
import {ShopContext} from '../context/GlobalState';
import M from "materialize-css";

const Product = (props) => {
    const [, dispatch] = useContext(ShopContext);
    return (
        <div className="wrapper grey_back product_item">
            <div className="item_container">
                <div>
                <img src={props.location.state.image} />
                </div>
                <div>
                <h2>{props.location.state.category}</h2>
                <h1>{props.location.state.name}</h1>
                <button className="pink2" onClick={()=>{
                    M.toast({html: 'Agregado!'})
                    dispatch({type:'ADD', payload: props.location.state})
                }}>Añadir a la tienda</button>
                </div>

            </div>
        </div>)
};

export default Product;