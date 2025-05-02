import './AdminProduct.css';
import { useState } from 'react';

function AdminProduct() {
    const [products, setProducts] = useState([]);

    const [product, setProduct] = useState({
        title: "",
        price: "",
        image: "",
        category: ""
    });

    function handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        console.log("Input changed", e);

        let copy = { ...product };
        if (name === "title") {
            copy.title = value;
        } else if (name === "price") {
            copy.price = parseFloat(value);
        } else if (name === "image") {
            copy.image = value;
        } else if (name === "category") {
            copy.category = value;
        }
        setProduct(copy);
    }

    function save() {
        console.log("Saving product", product);

        let copy = [...products];
        copy.push(product);
        setProducts(copy);
    }

    return (    
        <div className="adm-product">
            <h3>Product</h3>

            <div className='field'>
                <label className="form-label">Title: </label>
                <input onBlur={handleInput} name='title' className="form-control" type="text" />
            </div>

            <div className='field'>
                <label className="form-label">Price: </label>
                <input onBlur={handleInput} name='price' className="form-control" type="number" />
            </div>

            <div className='field'>
                <label className="form-label">Image: </label>
                <input onBlur={handleInput} name='image' className="form-control" type="text" />
            </div>

            <div className='field'>
                <label className="form-label">Category: </label>
                <input onBlur={handleInput} name='category' className="form-control" type="number" />
            </div>

            <div className='controls'>
                <button onClick={save} className='btn btn-dark'>Save product</button>
            </div>

            <div className='list-product'>
                {products.map((item, index) => (
                    <div className='items-product' key={index}>
                        <h3>{item.title}</h3>
                        <img src={item.image} alt={item.title} />
                        <label>Price: ${item.price.toFixed(2)}</label>
                        <label>Category: {item.category}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminProduct;
