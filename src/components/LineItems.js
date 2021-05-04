import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LineItems = (props) => {
  const { product, removeProduct, changeQuantity } = props;

  const [productToRemove, setProductToRemove] = useState();

  useEffect(() => {
    setProductToRemove(product);
  }, []);

  const add = () => {
    removeProduct(productToRemove);
  };

  const plus = () => {
    changeQuantity.add(product);
  };

  const minus = () => {
    changeQuantity.remove(product);
  };

  return (
    <div className="line-item" key={`${product.name}${product.quantity}`}>
      <div className="thumbnail-container">
        <Link id="thumbnail" to={`/products/${product.url}`}>
          <img src={product.src} alt="" />
        </Link>
      </div>
      <div className="info-container">
        <div className="top-line">
          <Link id="product-name" to={`/products/${product.url}`}>
            {product.name}
          </Link>
          <div className="price-quantity-container">
            <div id="line-price">{`$${product.price}`}</div>
            <div className="quantity-outer-container">
              <div className="quantity-inner-container">
                <button id="line-minus" onClick={minus}>
                  -
                </button>
                <div id="line-quantity-input">{product.quantity}</div>
                <button id="line-plus" onClick={plus}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons-container">
          <button className="delete-button" onClick={add}>
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default LineItems;
