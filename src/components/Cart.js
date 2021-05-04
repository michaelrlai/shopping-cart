import LineItems from "./LineItems";
import { useEffect, useState } from "react";

const Cart = (props) => {
  const [subtotal, setSubtotal] = useState(0);
  const { cart, removeProduct, changeQuantity } = props;

  useEffect(() => {
    let tempSubtotal = 0;
    cart.forEach((item) => {
      tempSubtotal = tempSubtotal + item.quantity * item.price;
    });
    setSubtotal(tempSubtotal);
  }, [cart]);

  return (
    <div>
      <div className="cart-container">
        <div className="line-items-container">
          <div className="shopping-cart-title">Shopping Cart</div>
          {cart.map((product) => (
            <LineItems
              key={`cart-${product.name}`}
              product={product}
              removeProduct={removeProduct}
              changeQuantity={changeQuantity}
            />
          ))}
          <div className="subtotal-container">
            <div id="subtotal">{`Subtotal: $${subtotal}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
