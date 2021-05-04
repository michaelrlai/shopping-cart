import { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

const Shop = (props) => {
  const { path, url } = useRouteMatch();
  const { products } = props;
  return (
    <div className="shop-container">
      <div className="shop-nav-container">
        <ul>
          <li id="shop-nav-title">
            <Link to={`${url}`}>Shop</Link>
          </li>
          <li>
            <Link to={`${url}/bracelets`}>Bracelets</Link>
          </li>
          <li>
            <Link to={`${url}/necklaces`}>Necklaces</Link>
          </li>
          <li>
            <Link to={`${url}/rings`}>Rings</Link>
          </li>
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

        <Switch>
          <Route exact path={`${path}`}>
            <div className="products-container-title">Shop All</div>
            <ShowProducts products={products} />
          </Route>
          <Route path={`${path}/bracelets`}>
            <Bracelets products={products} />
          </Route>
          <Route path={`${path}/necklaces`}>
            <Necklaces products={products} />
          </Route>
          <Route path={`${path}/rings`}>
            <Rings products={products} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Shop;

const Bracelets = (props) => {
  const { products } = props;
  const [bracelets, setBracelets] = useState([]);
  useEffect(() => {
    setBracelets(
      products.filter((product) => {
        if (product.type === "bracelet") {
          return product;
        }
      })
    );
  }, []);
  return (
    <div>
      <div className="products-container-title">Bracelets</div>
      <ShowProducts products={bracelets} />
    </div>
  );
};

const Necklaces = (props) => {
  const { products } = props;
  const [necklaces, setNecklaces] = useState([]);
  useEffect(() => {
    setNecklaces(
      products.filter((product) => {
        if (product.type === "necklace") {
          return product;
        }
      })
    );
  }, []);
  return (
    <div>
      <div className="products-container-title">Necklaces</div>
      <ShowProducts products={necklaces} />
    </div>
  );
};

const Rings = (props) => {
  const { products } = props;
  const [rings, setRings] = useState([]);
  useEffect(() => {
    setRings(
      products.filter((product) => {
        if (product.type === "ring") {
          return product;
        }
      })
    );
  }, []);
  return (
    <div>
      <div className="products-container-title">Rings</div>
      <ShowProducts products={rings} />
    </div>
  );
};

const ShowProducts = (props) => {
  const { products } = props;
  return (
    <div className="products-container">
      {products.map((product) => (
        <div className="product-container" key={product.name}>
          <Link to={`/products/${product.url}`}>
            <img className="product-image" src={product.src} alt="" />
          </Link>
          <div className="product-caption">
            <Link to={`/products/${product.url}`}>
              <div className="product-name">{product.name}</div>
            </Link>
            <div className="product-price">{`$${product.price}`}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
