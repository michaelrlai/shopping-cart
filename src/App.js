import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Cart from "./components/Cart";
import products from "./components/products";
import Product from "./components/Product";

const App = () => {
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
          <Cart />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
