import Product from "../components/Product";
import "./Catalog.css";
import DaraService, { mock_categories } from '../assets/services/DaraService';
import { useState, useContext, useEffect } from "react";
import DataContext from "../state/DataContext";

function Catalog() {
    const [filter, setFilter] = useState();
    const { products } = useContext(DataContext);
    const [allProducts, setAllProducts] = useState([]); // Initialize as empty array
    const [categories, setCategories] = useState([]);

    async function loadProducts() {
        try {
            const products = await DaraService.getCatalog();
            setAllProducts(Array.isArray(products) ? products : []);
        } catch (error) {
            console.error("Error loading products:", error);
            setAllProducts([]);
        }
    }

    async function loadCategories() {
        try {
            const categories = await DaraService.getCategories();
            setCategories(Array.isArray(categories) ? categories : []);
        } catch (error) {
            console.error("Error loading categories:", error);
            setCategories([]);
        }
    }

    useEffect(function() {
        loadProducts();
        loadCategories();
    }, []);

    const productsToDisplay = allProducts.length > 0 ? allProducts : products;

    return (
        <div className="catalog">
            <div className="main-content">
                <h1>Check the catalog</h1>

                <div className="filters">
                    <h2>Categories</h2>
                    {categories.map((category, index) => (
                        <button 
                            key={index} 
                            onClick={() => setFilter(category)}
                            className={`btn btn-sm ${filter === category ? "btn-primary" : "btn-light"}`}>
                            {category}
                        </button>
                    ))}
                    <button 
                        onClick={() => setFilter("all")}
                        className={`btn btn-sm ${filter === "all" ? "btn-primary" : "btn-light"}`}>
                        All
                    </button>
                </div>

                <div className="list">
                    {productsToDisplay.filter(product => !filter || product.category === filter).map(product => (
                        <Product
                         key={product.id}
                         data={product}  
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Catalog;