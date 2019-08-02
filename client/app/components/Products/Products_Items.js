import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {ShopContext} from '../context/GlobalState';
import img from '../../styles/img/hat.jpg'
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { IconContext } from "react-icons";
import M from "materialize-css";

const ProductItems = (props) => {
    const [, dispatch] = useContext(ShopContext);
    return (
        <div className="wrapper product_items">
            <div className="grid">
                <div className="select">
                    <div className="select_1">
                        <h3>Filter {props.products.length} items</h3>
                        <p>x Gender: Woman</p>
                        <p>x Category: Dresses</p>
                    </div>
                    <div className="select_2">
                        <h3>Colores</h3>
                        <div className="blue"></div>
                        <div className="marine"></div>
                        <div className="red"></div>
                        <div className="orange"></div>
                        <div className="yellow"></div>
                        <div className="green"></div>
                        <div className="purple"></div>
                    </div>
                </div>
                <div className="products_info">
                    {props.products.map(
                        product =>
                            <div className="item">
                                <div className="front">
                                    <img src={img} alt="hat" />
                                    <h2>{product.name}</h2>
                                    <h3>${product.price}</h3>
                                </div>
                                <div className="back">
                                    <h2>{product.name}</h2>
                                    <h3>${product.price}</h3>
                                    <div className="store" onClick={()=>{
                                        M.toast({html: 'Agregado!'})
                                        dispatch({type:'ADD', payload: product})
                                    }}>
                                        <div className="hearth_container">
                                            <IconContext.Provider value={{ className: "hearth hearth_empty" }}>
                                                <IoIosHeartEmpty />
                                            </IconContext.Provider>
                                            <IconContext.Provider value={{ className: "hearth hearth_full" }}>
                                                <IoIosHeart />
                                            </IconContext.Provider>
                                        </div>
                                        <p>Añadir a la tienda</p>
                                    </div>
                                    <Link to={{
                                        pathname: `/product/${product._id}`,
                                        state: product
                                    }} className="pink2">Mas detalles</Link>
                                </div>
                            </div>)}
                </div>
            </div>
        </div>
    )
};

export default ProductItems;