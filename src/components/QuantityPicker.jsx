import "./QuantityPicker.css";
import { useState } from "react";


function QuantityPicker({ onChange }) {
    const [quantity, setQuantity] = useState(1);

    function increase() {
        const newQty = quantity + 1;
        setQuantity(newQty);
        onChange(newQty);
    }

    function decrease() {
        if (quantity > 1) {
            const newQty = quantity - 1;
            setQuantity(newQty);
            onChange(newQty);
        }
    }

    return (
        <div className="quantity-picker">
            <button onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;
