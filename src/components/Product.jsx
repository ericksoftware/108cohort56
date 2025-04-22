import './Product.css';
import QuantityPicker from './QuantityPicker';

function Product() {
  return (
    <div className="product">
        <img src="https://picsum.photos/230/200"></img>
      <h3>Product Title</h3>

      <QuantityPicker></QuantityPicker>

      <button className="btn btn-sm btn-success">Add to Cart</button>
    </div>
  );
}

export default Product;
