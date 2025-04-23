import './Product.css';
import QuantityPicker from './QuantityPicker';

function Product(props) {
  return (
    <div className="product">
      <div className="product-image">
        <img src={props.data.image} alt={props.data.title} />
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{props.data.title}</h3>
        
        <div className="product-price">
          <label>Price: ${props.data.price.toFixed(2)}</label>
        </div>
        
        <div className="product-controls">
          <QuantityPicker />
        </div>
        
        <div className="product-action">
          <button className="btn-add-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;