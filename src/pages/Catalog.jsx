import Product from "../components/Product";
import "./Catalog.css";
import { mock_categories } from '../assets/services/DaraService';
import { useState, useContext } from "react";
import DataContext from "../state/DataContext";

function Catalog() {
    const [filter, setFilter] = useState();
    const { products } = useContext(DataContext);

    const filteredProducts = filter 
        ? products.filter(item => item.category === filter)
        : products;

    return (
        <div className="catalog">
            <div className="main-content">
                <h1>Check the catalog</h1>

                <div className="filters">
                    <h2>Categories</h2>
                    {mock_categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className="btn btn-sm btn-dark">
                            {cat}
                        </button>
                    ))}
                    <button 
                        onClick={() => setFilter(null)}
                        className="btn btn-sm btn-light">
                        Clear Filter
                    </button>
                </div>

                <div className="list">
                    {filteredProducts.map((item) => (
                        <div className="product" key={item.id}>
                            <Product data={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Catalog;