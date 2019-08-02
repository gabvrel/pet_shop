const shopReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {products: [...state.products, action.payload],
                    cart: state.cart + 1
            };
        case 'REMOVE':
            return {products: state.products.filter(product => product._id !== action.productId), 
                    cart: state.cart - 1};
        case 'RESET':
                return {
                    products: [],
                    cart: 0
                }
        default:
            return alert('siiii');
    }
};

export default shopReducer;

