import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">Mi Sitio</div>
            <div className="menu">
                <a href="/login" className="nav-link">Log in</a>
                <a href="/search" className="nav-link">Search</a>
                <a href="/subscribe" className="nav-link">Subscribe</a>
                <a href="/menu" className="nav-link active">Menu</a>
            </div>
        </nav>
    );
}

export default Navbar;