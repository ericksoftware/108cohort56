import './AdminDiscount.css';

function AdminDiscount() {
    return (    
        <div className="adm-discount">
            <h3>Discount</h3>

            <div className='field'>
                <label className="form-label">Code: </label>
                <input className="form-control" type="text" />
            </div>

            <div className='field'>
                <label className="form-label">Discount: </label>
                <input className="form-control" type="number" />
            </div>

            <div className='controls'>
                <button className='btn btn-dark'>Save discount</button>
            </div>
        </div>
    );

}   

export default AdminDiscount;