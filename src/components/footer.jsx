import "./footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-col">
                    <h3>About Us</h3>
                    <ul>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                
                <div className="footer-col">
                    <p>Footer created by: Erick</p>
                </div>
            </div>
            <div className="copyright">
                <p>© 2025 My Company. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
