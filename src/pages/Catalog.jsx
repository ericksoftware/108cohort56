import Product from "../components/Product";
import "./catalog.css";
import { mock_catalog } from '../assets/services/DaraService';

function Catalog() {
    return (
        <div className="catalog">
            <div className="main-content">
                <h1>Hello world from react</h1>
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
