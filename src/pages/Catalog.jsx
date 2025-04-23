import Product from "../components/Product";
import "./Catalog.css";
import { mock_catalog, mock_categories } from '../assets/services/DaraService';
import { useState } from "react";

function Catalog() {
    const [filter, setfilter] = useState();
    return (
        <div className="catalog">
            <div className="main-content">
                <h1>Check the catalog</h1>

                <div className="filters">
                        <h2>Categories</h2>
                        {mock_categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setfilter(cat)}
                            className="btn btn-sm btn-dark">
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="list">
                    {mock_catalog.map((item) => {
                        return (
                            <div className="product" key={item.id}>
                                <Product data={item} />
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}

export default Catalog;
