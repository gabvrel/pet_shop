import React from 'react';

const FilterProduct = () => (
    <div className="wrapper ">
        <div className="filter_start">
            <div>
                <h3>Filtro</h3>
                <select name="pets">
                    <option value="perros">Perros</option>
                    <option value="gatos">Gatos</option>
                </select>
            </div>
            <div>
                <h3>Ordenar</h3>
                <select name="sortBy">
                    <option value="precio">Precio</option>
                    <option value="popularidad">Popularidad</option>
                </select>
                <button className="pink2">Mayor a Menor</button>
                <button className="pink2">Menor a Mayor</button>
            </div>
        </div>
    </div>
);

export default FilterProduct;