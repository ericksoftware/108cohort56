import './AdminProduct.css';

function AdminProduct() {
    return (    
        <div className="adm-product">
            <h3>Product</h3>

            <div className='field'>
                <label className="form-label">Title: </label>
                <input className="form-control" type="text" />
            </div>

            <div className='field'>
                <label className="form-label">Price: </label>
                <input className="form-control" type="number" />
            </div>

            <div className='field'>
                <label className="form-label">Image: </label>
                <input className="form-control" type="text" />
            </div>

            <div className='field'>
                <label className="form-label">Category: </label>
                <input className="form-control" type="number" />
            </div>

            <div className='controls'>
                <button className='btn btn-dark'>Save product</button>
            </div>
        </div>
    );
}

export default AdminProduct;
