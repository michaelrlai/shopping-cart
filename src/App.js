import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart" id="cart">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

const Home = () => {
  return <div className="home">home</div>;
};

const Shop = () => {
  return <div>shop</div>;
};

const About = () => {
  return <div>about</div>;
};

const Cart = () => {
  return <div>cart</div>;
};
