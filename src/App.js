import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Cart from "./components/Cart";
import Product from "./components/Product";
import products from "./components/Products";

const App = () => {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    let alreadyCarted = false;
    let tempCart = [...cart];

    tempCart.forEach((item) => {
      if (item.name === product.name) {
        item.quantity += product.quantity;
        alreadyCarted = true;
        console.log("hi");
      }
    });

    if (alreadyCarted === true) {
      setCart(tempCart);
    } else {
      setCart([...cart, product]);
    }
  };
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/" id="title">
              Jewelry Co
            </Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart" id="cart">
              <img
                src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png"
                alt="cart"
              />
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/shop">
          <Shop products={products} />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart cart={cart} />
        </Route>
        <Route exact path="/shop/products">
          <Product />
        </Route>

        {products.map((product) => (
          <Route path={`/shop/products/${product.url}`} key={product.name}>
            <Product product={product} addProduct={addProduct} />
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
