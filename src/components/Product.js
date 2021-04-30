import { useState, useEffect } from "react";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const [productToAdd, setProductToAdd] = useState({});
  const { addProduct, product } = props;

  useEffect(() => {
    setProductToAdd({ ...product, quantity: 1 });
  }, []);

  useEffect(() => {
    setProductToAdd((prevProd) => {
      return { ...prevProd, quantity: quantity };
    });
  }, [quantity]);

  const add = () => {
    addProduct(productToAdd);
  };

  const minusQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => {
        return prevQuantity - 1;
      });
    }
  };
  const plusQuantity = () => {
    setQuantity((prevQuantity) => {
      return prevQuantity + 1;
    });
  };

  return (
    <div className="product-page">
      <div className="container">
        <div className="left-container">
          <div className="image-container">
            <img src={product.src} alt="" />
          </div>
        </div>
        <div className="right-container">
          <div className="product-name">{product.name}</div>
          <div className="product-price">{`$${product.price}`}</div>
          <div className="add-button-container">
            <button className="add-button" onClick={add}>
              ADD TO CART
            </button>
          </div>
          <div className="quantity-outer-container">
            <div className="quantity-inner-container">
              <button id="minus" onClick={minusQuantity}>
                -
              </button>
              <div id="quantity-input">{quantity}</div>
              <button id="plus" onClick={plusQuantity}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
