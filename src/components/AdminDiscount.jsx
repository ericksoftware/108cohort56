import React, { useState } from 'react';
import './AdminDiscount.css';

function AdminDiscount() {
    const [products, setProducts] = useState([]);
    const [coupon, setCoupon] = useState({
        code: "",
        discount: ""
    });

    function handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        console.log("Input changed", e);

        let copy = {...coupon};
        if (name === "code") {
            copy.code = value;
        } else if (name === "discount") {
            copy.discount = value;
        }
        setCoupon(copy);
    }

    function save() {
        console.log("Saving discount", coupon);

        if (!coupon.code || !coupon.discount) {
            alert("Please fill in all fields");
            return;
        }

        let copy = [...products];
        copy.push(coupon);
        setProducts(copy);
        
        // Reset form
        setCoupon({
            code: "",
            discount: ""
        });
        
        // Clear form fields
        document.getElementById("coupon-code").value = "";
        document.getElementById("coupon-discount").value = "";
    }

    return (    
        <div className="admin-card discount-card">
            <div className="card-header">
                <h3>Create Discount Coupon</h3>
                <span className="card-icon">🏷️</span>
            </div>

            <div className="card-body">
                <div className="input-group">
                    <label htmlFor="coupon-code">Coupon Code</label>
                    <input 
                        id="coupon-code"
                        name="code"
                        type="text" 
                        placeholder="Enter coupon code (e.g. SUMMER25)"
                        onChange={handleInput}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="coupon-discount">Discount Percentage</label>
                    <div className="input-with-icon">
                        <input 
                            id="coupon-discount"
                            name="discount"
                            type="number" 
                            placeholder="Enter discount percentage"
                            onChange={handleInput}
                        />
                        <span className="input-icon">%</span>
                    </div>
                </div>

                <button onClick={save} className="btn-save">
                    <span className="btn-icon">+</span>
                    Create Coupon
                </button>
            </div>

            {products.length > 0 && (
                <div className="card-footer">
                    <h4>Active Coupons</h4>
                    <div className="coupon-list">
                        {products.map((item, index) => (
                            <div className="coupon-item" key={index}>
                                <div className="coupon-details">
                                    <div className="coupon-code">{item.code}</div>
                                    <div className="coupon-discount">{item.discount}% OFF</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}   

export default AdminDiscount;