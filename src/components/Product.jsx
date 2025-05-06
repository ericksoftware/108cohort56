import React, { useState, useContext } from 'react';
import DataContext from '../state/DataContext';
import './Product.css';
import QuantityPicker from './QuantityPicker';

function Product(props) {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  
  const addToCart = useContext(DataContext).addToCart;

  function add() {
    console.log(`Added ${quantity} of ${props.data.title} to cart`);

    let prodForCart = {...props.data, quantity};
    addToCart(prodForCart);
    
    // Show added animation
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  }

  function handleQuantityChange(newQuantity) {
    console.log(`Quantity changed to ${newQuantity}`);
    setQuantity(newQuantity);
  }

  function getTotalPrice() {  
    return (props.data.price * quantity).toFixed(2);
  }

  // Create category name for display
  const categoryName = typeof props.data.category === 'number' 
    ? `Category ${props.data.category}` 
    : props.data.category;

  return (
    <div 
      className={`product-card ${isAdded ? 'added' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-badge">{categoryName}</div>
      
      <div className="product-image">
        <img src={props.data.image} alt={props.data.title} />
        
        {isHovered && (
          <div className="quick-actions">
            <button className="quick-view">Quick View</button>
          </div>
        )}
      </div>

      <div className="product-content">
        <h3 className="product-title">{props.data.title}</h3>
        
        <div className="price-row">
          <span className="product-price">${props.data.price.toFixed(2)}</span>
          <span className="product-total">Total: ${getTotalPrice()}</span>
        </div>
      
        <div className="product-controls">
          <div className="quantity-control">
            <QuantityPicker onChange={handleQuantityChange} />
          </div>
          
          <button 
            className={`add-to-cart-btn ${isAdded ? 'added' : ''}`} 
            onClick={add}
          >
            {isAdded ? (
              <>
                <span className="check-icon">✓</span> Added
              </>
            ) : (
              <>
                <span className="cart-icon">🛒</span> Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;