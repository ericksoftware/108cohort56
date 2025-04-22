import Product from "../components/Product";
import "./catalog.css";

function Catalog() {
    return (
        <div className="catalog"> {/* Agrega esta clase al contenedor principal */}
            <div className="main-content">
                <h1>Hello world from react</h1>
                <div className="list">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    {/* Puedes agregar más productos para probar */}
                </div>
            </div>
        </div>
    );
}

export default Catalog;
