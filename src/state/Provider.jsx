import { useState } from 'react';
import DataContext from './DataContext';
import { mock_catalog } from '../assets/services/DaraService'; 

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ userName: "Erick" });
    const [products, setProducts] = useState(mock_catalog); 

    function addToCart(product) {
        const newCart = [...cart];
        const index = newCart.findIndex(item => item.id === product.id);
        if (index !== -1) {
            newCart[index].quantity += product.quantity;
        } else {
            newCart.push({ ...product, quantity: product.quantity });
        }
        setCart(newCart);
        console.log("Carrito actualizado:", newCart);
    }

    function removeFromCart(product) {
        const newCart = cart.filter(item => item.id !== product.id);
        setCart(newCart);
        console.log("Carrito actualizado:", newCart);
    }
    
    function clearCart() {
        setCart([]);
        console.log("Carrito vaciado");
    }

    function addProduct(newProduct) {
        setProducts(prevProducts => [...prevProducts, {
            ...newProduct,
            id: Date.now() 
        }]);
    }

    return (
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            products: products,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            clearCart: clearCart,
            addProduct: addProduct
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;