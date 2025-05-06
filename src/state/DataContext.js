import { createContext } from "react";

const DataContext = createContext({
    products: [],
    cart: [],
    user: {},
    
    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
    addProduct: () => {}, 
});

export default DataContext;