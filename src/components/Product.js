const Product = (props) => {
  const { addProduct, product } = props;
  const add = () => {
    addProduct(product);
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
        </div>
      </div>
    </div>
  );
};

export default Product;
