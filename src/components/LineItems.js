import { Link } from "react-router-dom";

const LineItems = (props) => {
  const { product } = props;
  return (
    <div className="line-item" key={`${product.name}${product.quantity}`}>
      <div>
        <Link id="thumbnail" to={`/shop/products/${product.url}`}>
          <img src={product.src} alt="" />
        </Link>
      </div>
      <div>
        <Link id="product-name" to={`/shop/products/${product.url}`}>
          {product.name}
        </Link>
      </div>
      <div>{product.quantity}</div>
      <div>{`$${product.price}`}</div>
    </div>
  );
};

export default LineItems;
