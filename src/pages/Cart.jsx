import './Cart.css';
import { useContext } from 'react';
import DataContext from '../state/DataContext';
import { Link } from 'react-router-dom';

function Cart() {
    const { cart, clearCart, removeFromCart } = useContext(DataContext);
  
    function clear() {
      console.log("Cart cleared");
      clearCart();
    }
  
    function remove(productId) {
      console.log(`Removed product with ID ${productId} from cart`);
      removeFromCart(productId);
    }
    
    function getNumOfProducts() {
        return cart.reduce((total, item) => total + item.quantity, 0);
    }

    const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <div className="cart">
            <h1>Ready to complete your order?</h1>
            <h3>We have {getNumOfProducts()} products ready for you</h3>

            {cart.length === 0 ? (
                <h3 className='alert alert-warning'>Your cart is empty. Go to <Link to="/catalog">Catalog</Link></h3>
            ) : (
                <>
                    
                    <div className='cart-content'>
                        <div className='list-cart'>
                            {cart.map((item) => (
                                <div className='items-cart' key={item.id}>
                                    <img src={item.image} alt={item.title} />
                                    <div className='info-cart'>
                                        <h3>{item.title}</h3>
                                        <label>Price: ${item.price.toFixed(2)}</label>
                                        <label>Quantity: {item.quantity}</label>
                                        <label>Total: ${(item.price * item.quantity).toFixed(2)}</label>
                                    </div>
                                    <div className="controls-cart">
                                        <button className='btn btn-danger' onClick={() => remove(item.id)}>Remove</button>
                                    </div>
                                </div>
                            ))}
                            <button className="btn btn-warning" onClick={clear}>Clear cart</button>
                        </div>
                        <div className='total-cart'>
                            <h3>Total: ${cartTotal.toFixed(2)}</h3>
                            <button className='btn btn-dark'>Complete Order</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;