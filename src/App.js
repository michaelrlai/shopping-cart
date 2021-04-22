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
                src="https://www.flaticon.com/svg/vstatic/svg/263/263142.svg?token=exp=1619056663~hmac=e5e785867aafb02cfce7d66114827569"
                alt=""
              />
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
  return (
    <div className="home">
      <div className="banner">
        <img
          src="https://images.pexels.com/photos/5696003/pexels-photo-5696003.jpeg?cs=srgb&dl=pexels-dayvison-de-oliveira-silva-5696003.jpg&fm=jpg"
          alt=""
        />

        <img
          src="https://images.pexels.com/photos/5370640/pexels-photo-5370640.jpeg?cs=srgb&dl=pexels-the-glorious-studio-5370640.jpg&fm=jpg"
          alt=""
        />
      </div>
    </div>
  );
};

const Shop = () => {
  return <div>shop</div>;
};

const About = () => {
  return (
    <div className="about">
      <div className="about-title">About Jewelry Co</div>
      <p className="about-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
        consequatur quasi, repellendus, nostrum qui odit ea vero facere totam
        sunt optio neque natus ex iusto porro accusamus blanditiis inventore ab.
      </p>
    </div>
  );
};

const Cart = () => {
  return <div>cart</div>;
};
