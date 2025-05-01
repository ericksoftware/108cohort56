import { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import DataContext from "../state/DataContext";

function Navbar() {
    const { user, cart } = useContext(DataContext);
    
    // Suma todas las cantidades de los productos en el carrito
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    return (
        <nav className="navbar">
            <div className="navbar-brand">Mi Sitio</div>
            <div className="menu">
                <Link to="/home">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/about">About</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/cart">Cart</Link>
            </div>
            <label className="btn btn-out line-light btn-user">
                <i className="fa-regular fa-circle-user"></i>{user.userName}
            </label>

            <label>{totalItems} view cart</label>
        </nav>
    );
}

export default Navbar;