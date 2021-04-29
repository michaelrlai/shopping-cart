import { Switch, Route, Link } from "react-router-dom";

const Shop = (props) => {
  const { products } = props;
  return (
    <Switch>
      <Route path="/">
        <div className="shop-container">
          <div className="shop-nav-container">
            <ul>
              <li id="shop-nav-title">Shop /</li>
              <li>Bracelets</li>
              <li>Necklaces</li>
              <li>Rings</li>
            </ul>
          </div>
          <div className="shop-container-right">
            <div className="shop-container-right-banner">
              <img
                src="https://images.unsplash.com/photo-1547738238-5ddb16bef15f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1081&q=80"
                alt=""
              />
              <img
                src="https://images.unsplash.com/photo-1608543837489-0fab463c925e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt=""
              />
            </div>
            <div className="products-container-title">Shop All</div>
            <div className="products-container">
              {products.map((product) => (
                <div className="product-container" key={product.name}>
                  <Link to={`/shop/products/${product.url}`}>
                    <img className="product-image" src={product.src} alt="" />
                  </Link>
                  <div className="product-caption">
                    <Link to={`/shop/products/${product.url}`}>
                      <div className="product-name">{product.name}</div>
                    </Link>
                    <div className="product-price">{`$${product.price}`}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Route>
    </Switch>
  );
};

export default Shop;
