const Cart = (props) => {
  const { cart } = props;
  return (
    <div>
      {cart.map((product) => (
        <div key={`${product.name}${product.price}`}>
          <div>Product: {product.name}</div>
          <div>Price: {product.price}</div>
          <div>Quantity: {product.quantity}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
