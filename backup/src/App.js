import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <news>
          <p>
            Due to the COVID-19 pandemic, delivery timelines may be impacted.
            Any inconvenience is regreted.
          </p>
        </news>
        <header className="row">
          <div>
            <a className="brand" href="\home">
              AT-Doctor
            </a>
          </div>
          <div>
            <a href="\login">
              <span className="fa fa-user"></span>Login
            </a>
            <a href="\cart">
              <span className="fa fa-shopping-cart"></span>Cart
            </a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductDetails}></Route>
          <Route path="/" component={Home} exact></Route>
        </main>
        <footer>
          <p>Sey Global Spiritual Solutions - Copyright(2021)</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
