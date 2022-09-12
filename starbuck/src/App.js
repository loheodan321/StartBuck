import style from "./App.module.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className={style["app"]}>
      <div className={style["header"]}>
        <Header />
      </div>
      <div className={style["section"]}></div>
      <div className={style["footer"]}></div>
    </div>
  );
}

export default App;
