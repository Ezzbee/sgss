import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Home from "./components/Home";
import "./Sidebar.css";
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
          <sidebar>
            <h2>Product Categories</h2>
            <hr />
            <div className="sidebar__menu">
              <div className="sidebar__link ">
                <i className="fa fa-heart"></i>
                <a href="#">Love</a>
              </div>
              <div className="sidebar__link">
                <i className="fa fa-umbrella "></i>
                <a href="/Profile">Protection</a>
              </div>
              <div className="sidebar__link">
                <i className="fa fa-glass" aria-hidden="true"></i>
                <a href="/appointments">Business Success</a>
              </div>

              <div className="sidebar__link">
                <i className="fa fa-magic"></i>
                <a href="#">Luck</a>
              </div>
              <div className="sidebar__link ">
                <i className="fa fa-dollar"></i>
                <a href="#">Financial&nbsp;problems</a>
              </div>
              <div className="sidebar__link">
                <i className="fa fa-frown-o"></i>
                <a href="#">Body&nbsp;pain&nbsp;&&nbsp;General&nbsp;illness</a>
              </div>
            </div>
          </sidebar>
          <content>
            <Route path="/product/:id" component={ProductDetails}></Route>
            <Route path="/" component={Home} exact></Route>
          </content>
        </main>
        <footer>
          <p>Sey Global Spiritual Solutions - Copyright(2021)</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
