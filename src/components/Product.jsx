import './Product.css';
import QuantityPicker from './QuantityPicker';

function Product(props) {
  return (
    <div className="product">
        <img src={props.data.image}></img>
      <h3>{props.data.title}</h3>

      <div>
        <label>Price: ${props.data.price.toFixed(2)}</label>
      </div>

      <div className="controls">
      <QuantityPicker></QuantityPicker>
      </div>

      <button className="btn btn-sm btn-success">Add to Cart</button>
    </div>
  );
}

export default Product;
