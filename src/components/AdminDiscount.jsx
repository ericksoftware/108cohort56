import './AdminDiscount.css';
import { useState } from 'react'; 

function AdminDiscount() {
    const [products, setProducts] = useState([]);

    const [coupon, setCoupon] = useState({
        code: "",
        discount: ""
    });

    function handleInput(e){
        let value = e.target.value;
        let name = e.target.name;
        console.log("Input changed", e);

        let copy = {...coupon};
        if (name === "code"){
            copy.code = value;
        } else if (name === "discount"){
            copy.discount = value;
        }
        setCoupon(copy);
    }

    function save() {
        console.log("Saving discount", coupon);

        let copy = [...products];
        copy.push(coupon);
        setProducts(copy);
    }

    return (    
        <div className="adm-discount">
            <h3>Discount</h3>

            <div className='field'>
                <label className="form-label">Code: </label>
                <input onBlur={handleInput} name="code" className="form-control" type="text" />
            </div>

            <div className='field'>
                <label className="form-label">Discount: </label>
                <input onBlur={handleInput} name='discount' className="form-control" type="number" />
            </div>

            <div className='controls'>
                <button onClick={save} className='btn btn-dark'>Save discount</button>
            </div>

            <div className='list-discount'>
                {products.map((item, index) => (
                    <div className='items-discount' key={index}>
                        <h3>{item.code}</h3>
                        <label>Discount: {item.discount}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}   

export default AdminDiscount;