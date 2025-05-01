import DataContext from '../state/DataContext';
import './Product.css';
import QuantityPicker from './QuantityPicker';
import { useState } from 'react';
import { useContext } from 'react';

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  const addToCart = useContext(DataContext).addToCart;

  function add(){
    // Add product to cart logic here
    console.log(`Added ${quantity} of ${props.data.title} to cart`);

    let prodForCart = {...props.data, quantity};
    addToCart(prodForCart);
  }

  function handleQuantityChange(newQuantity) {
    console.log(`Quantity changed to ${newQuantity}`);
    setQuantity(newQuantity);
  }

  function getTotalPrice() {  
    return (props.data.price * quantity).toFixed(2);
  }

  return (
    <div className="product">
      <div className="product-image">
        <img src={props.data.image} alt={props.data.title} />
      </div>

      <div className="product-info">
        <h3 className="product-title">{props.data.title}</h3>

        <div className="product-price">
          <label>Price: ${props.data.price.toFixed(2)}</label>
          <label>Total: ${getTotalPrice()}</label>
        </div>

        <div className="product-controls">
          <QuantityPicker onChange={handleQuantityChange} />
        </div>

        <div className="product-action">
          <button className="btn-add-cart" onClick={add}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
