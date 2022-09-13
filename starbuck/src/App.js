import style from "./App.module.css";
import Header from "./components/Header/Header";
import Home from "./components/Section/Home/Home";

function App() {
  return (
    <div className={style["app"]}>
      <div className={style["header"]}>
        <Header />
      </div>
      <div className={style["section"]}>
        <Home />
      </div>
      <div className={style["footer"]}></div>
    </div>
  );
}

export default App;
