import {useState} from 'react';
import DataContext from './DataContext';

function GlobalProvider(props){
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({userName:"Erick"});

    function addToCart(product) {
        const newCart = [...cart];
        const index = newCart.findIndex(item => item.id === product.id);
        if (index !== -1) {
          newCart[index].quantity += product.quantity; // ¡Usa product.quantity, no 1!
        } else {
          newCart.push({ ...product, quantity: product.quantity });
        }
        setCart(newCart);
        console.log("Carrito actualizado:", newCart); // Verifica que el carrito se actualice
      }

    function removeFromCart(){}
    function clearCart(){}

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