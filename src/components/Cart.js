const Cart = (props) => {
  const { cart } = props;
  return (
    <div>
      {cart.map((product) => (
        <div key={`${product.name}${product.price}`}>
          <div>{product.name}</div>
          <div>{product.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
