import { Switch, Route, Redirect } from "react-router-dom";

import style from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/Section/About/About";
import CustomerService from "./components/Section/CustomerService/CustomerService";
import Home from "./components/Section/Home/Home";
import Product from "./components/Section/Product/Product";
import QuickView from "./components/Section/QuickView/QuickView";

function App() {
  return (
    <div className={style["app"]}>
      <div className={style["upper"]}>
        <div className={style["header"]}>
          <Header />
        </div>
      </div>
      <div className={style["lower"]}>
        <div className={style["section"]}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact>
              <Home />
            </Route>
            <Route path="/home/">
              <QuickView />
            </Route>
            <Route path="/product" exact>
              <Product />
            </Route>
            <Route path="/product/:productID">
              <QuickView />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/customer-service">
              <CustomerService />
            </Route>
          </Switch>
        </div>
        <div className={style["footer"]}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
