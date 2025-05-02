import {useState} from 'react';
import DataContext from './DataContext';

function GlobalProvider(props){
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({userName:"Erick"});

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

    function removeFromCart(){
        const newCart = cart.filter(item => item.id !== product.id);
        setCart(newCart);
        console.log("Carrito actualizado:", newCart);
    }
    
    function clearCart(){
        setCart([]);
        console.log("Carrito vaciado");
    }

    return(
        <DataContext.Provider value={{
            cart: cart,
            user: user,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            clearCart: clearCart
        }}>
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalProvider;