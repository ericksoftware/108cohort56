import React, { useState, useEffect } from 'react';
import './QuantityPicker.css';

function QuantityPicker(props) {
  const [quantity, setQuantity] = useState(1);
  const min = props.min || 1;
  const max = props.max || 10;

  useEffect(() => {
    // If there's a change handler passed as prop, call it with the initial value
    if (props.onChange) {
      props.onChange(quantity);
    }
  }, []);

  function increase() {
    if (quantity < max) {
      const newVal = quantity + 1;
      setQuantity(newVal);
      
      if (props.onChange) {
        props.onChange(newVal);
      }
    }
  }

  function decrease() {
    if (quantity > min) {
      const newVal = quantity - 1;
      setQuantity(newVal);
      
      if (props.onChange) {
        props.onChange(newVal);
      }
    }
  }

  function handleInputChange(e) {
    let newVal = parseInt(e.target.value);
    
    // Handle NaN
    if (isNaN(newVal)) {
      newVal = min;
    }
    
    // Apply limits
    if (newVal < min) newVal = min;
    if (newVal > max) newVal = max;
    
    setQuantity(newVal);
    
    if (props.onChange) {
      props.onChange(newVal);
    }
  }

  return (
    <div className="quantity-picker">
      <button 
        className="quantity-btn"
        onClick={decrease}
        disabled={quantity <= min}
      >
        -
      </button>
      
      <input
        type="number"
        className="quantity-input"
        value={quantity}
        min={min}
        max={max}
        onChange={handleInputChange}
        readOnly={props.readOnly}
      />
      
      <button 
        className="quantity-btn"
        onClick={increase}
        disabled={quantity >= max}
      >
        +
      </button>
    </div>
  );
}

export default QuantityPicker;