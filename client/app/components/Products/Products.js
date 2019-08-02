import React, { useState, useEffect } from 'react';
import '../../styles/products.scss';
import Title from './Title';
import GridEnter from './Grid_Enter';
import WelcomeProduct from './Welcome_Product';
import FilterProduct from './Filter_Products';
import ProductItems from './Products_Items';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/productos')
            .then(res => res.json())
            .then(result =>
                setProducts(result))
                
    }, []);

    return (
        <div>
            <Title />
            <GridEnter />
            <div className="grey_back">
                <WelcomeProduct />
                <FilterProduct />
                <ProductItems products={products}/>
            </div>
        </div>)
}
export default Products;