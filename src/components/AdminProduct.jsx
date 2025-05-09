import React, { useState, useContext, useEffect } from 'react';
import './AdminProduct.css';
import DataContext from '../state/DataContext';
import DaraService from '../assets/services/DaraService';

function AdminProduct() {
    // const { addProduct, products } = useContext(DataContext); 
    const [products, setProducts] = useState([]);
    
    const [product, setProduct] = useState({
        title: "",
        price: "",
        image: "",
        category: ""
    });
    
    const [formErrors, setFormErrors] = useState({
        title: false,
        price: false,
        image: false,
        category: false
    });

        async function loadProducts() {
            const response = await DaraService.getCatalog();
            return response.data;
        }
    
        async function loadCategories() {
            const response = await DaraService.getCategories();
            return response.data;
        }

        useEffect(function() {
            loadProducts();
            loadCategories();
        }, []);

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
        
        // Clear error for this field
        if (value) {
            setFormErrors({
                ...formErrors,
                [name]: false
            });
        }
    }

    function validateForm() {
        const errors = {
            title: !product.title,
            price: !product.price,
            image: !product.image,
            category: !product.category
        };
        
        setFormErrors(errors);
        return !Object.values(errors).some(Boolean);
    }

    // function save() {
    //     console.log("Saving product", product);
        
    //     if (!validateForm()) {
    //         return;
    //     }

    //     addProduct({
    //         title: product.title,
    //         price: parseFloat(product.price),
    //         image: product.image,
    //         category: product.category
    //     });
        
    //     // Reset form
    //     setProduct({
    //         title: "",
    //         price: "",
    //         image: "",
    //         category: ""
    //     });
        
    //     // Clear form fields
    //     document.getElementById("product-title").value = "";
    //     document.getElementById("product-price").value = "";
    //     document.getElementById("product-image").value = "";
    //     document.getElementById("product-category").value = "";
    // } 


  async function save() {
    console.log("Saving product", product);
    let response = await DaraService.saveProduct(product);
    console.log("Product saved", response);

    let copy = [...products];
    copy.push(product);
    setProducts(copy);
    }

    return (          
            <div className="admin-card product-card">
                <div className="card-header">
                    <h3>Add New Product</h3>
                    <span className="card-icon">📦</span>
                </div>
        
                {/* Mostrar mensaje de carga solo cuando products esté vacío */}
                {products.length < 1 && (
                    <div className="card-body">
                        <label className='alert alert-warning'>Loading, please wait....</label>
                    </div>
                )}
        
                {/* Mostrar el formulario siempre */}
                <div className="card-body">
                    <div className={`input-group ${formErrors.title ? 'error' : ''}`}>
                        <label htmlFor="product-title">Product Title</label>
                        <input 
                            id="product-title"
                            name="title"
                            type="text" 
                            placeholder="Enter product name"
                            onBlur={handleInput}
                        />
                        {formErrors.title && <span className="error-message">Title is required</span>}
                    </div>
        
                    <div className={`input-group ${formErrors.price ? 'error' : ''}`}>
                        <label htmlFor="product-price">Price</label>
                        <div className="input-with-icon">
                            <input 
                                id="product-price"
                                name="price"
                                type="number" 
                                step="0.01"
                                placeholder="Enter product price"
                                onBlur={handleInput}
                            />
                            <span className="input-icon">$</span>
                        </div>
                        {formErrors.price && <span className="error-message">Price is required</span>}
                    </div>
        
                    <div className={`input-group ${formErrors.image ? 'error' : ''}`}>
                        <label htmlFor="product-image">Image URL</label>
                        <input 
                            id="product-image"
                            name="image"
                            type="text" 
                            placeholder="Enter image URL"
                            onBlur={handleInput}
                        />
                        {formErrors.image && <span className="error-message">Image URL is required</span>}
                    </div>
        
                    <div className={`input-group ${formErrors.category ? 'error' : ''}`}>
                        <label htmlFor="product-category">Category</label>
                        <input 
                            id="product-category"
                            name="category"
                            type="text" 
                            placeholder="Enter product category"
                            onBlur={handleInput}
                        />
                        {formErrors.category && <span className="error-message">Category is required</span>}
                    </div>
        
                    <button onClick={save} className="btn-save">
                        <span className="btn-icon">+</span>
                        Add Product
                    </button>
                </div>
        
                {products.length > 0 && (
                    <div className="card-footer">
                        <h4>Product Inventory</h4>
                        <div className="product-list">
                            {products.map((item, index) => (
                                <div className="product-item" key={index}>
                                    <div className="product-image-small">
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="product-details">
                                        <h5>{item.title}</h5>
                                        <div className="product-meta">
                                            <span className="product-price">${parseFloat(item.price).toFixed(2)}</span>
                                            <span className="product-category">{item.category}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
}

export default AdminProduct;