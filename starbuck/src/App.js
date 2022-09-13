import style from "./App.module.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Section/Home/Home";

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
          <Home />
        </div>
        <div className={style["footer"]}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
