import { useState } from "react";
import "./QuantityPicker.css";

function QuantityPicker() {
    const [quantity, setQuantity] = useState(1);

    function increse() {
        console.log("incrementar")
        setQuantity(quantity + 1);
    }

    function decrease() {
        console.log("decrementar")
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }


    return (
        
        <div className="quantity-picker">
            <button onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button onClick={increse}>+</button>
        </div>
    );
}

export default QuantityPicker;