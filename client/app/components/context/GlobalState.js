import React, { useReducer } from 'react';
import shopReducer from '../store/reducers'

export const ShopContext = React.createContext({});
const initialState = {
    products: [],
    cart: 0
};

export const GlobalState = props => {
    const [ state, dispatch ] = useReducer(shopReducer, initialState);

    return(
        <ShopContext.Provider
        value={[ state, dispatch ]}>
        {props.children}
        </ShopContext.Provider>
    )
};

