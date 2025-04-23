// Updated HomePage.jsx
import "./HomePage.css";

function HomePage() {
    return (
        <div className="home-page">
            <div className="hero">
                <img className="hero-image" src="/images/images.png" alt="Hero background" />
                <div className="hero-content">
                    <h1 className="hero-title">Welcome to the Home Page</h1>
                    <p className="hero-subtitle">Discover our amazing products and services</p>
                    <a href="#" className="cta-button">Explore Now</a>
                </div>
            </div>
            <div className="features">
            </div>
        </div>
    );
}

export default HomePage;