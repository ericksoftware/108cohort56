import { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import DataContext from "../state/DataContext";

function Navbar() {
    const { user, cart } = useContext(DataContext);

    function getNumOfProducts() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].quantity;
        }
        return total;
    }
    
    return (
        <nav className="navbar">
            <div className="navbar-brand">Oxxo</div>
            <div className="menu">
                <Link to="/home">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/about">About</Link>
                <Link to="/admin">Admin</Link>
            </div>
            
            <div className="user-section">
                <span className="btn btn-outline-light btn-user">
                    <i className="fa-regular fa-circle-user"></i> {user.userName}
                </span>
                
                <Link to="/cart" className="btn btn-outline-light btn-cart">
                    Cart: <span className="badge">{getNumOfProducts()}</span>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
