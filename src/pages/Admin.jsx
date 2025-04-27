import AdminDiscount from "../components/AdminDiscount";
import AdminProduct from "../components/AdminProduct";
import "./Admin.css";

function Admin() {
    return (
        <div className="admin">
            <h1>Store Administration</h1>

            <div className="parent">
                <AdminProduct />
                <AdminDiscount />
            </div>
        </div>
    );
}

export default Admin;