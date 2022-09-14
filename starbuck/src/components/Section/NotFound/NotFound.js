import style from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={style["notfound"]}>
      <h1>Oops, We're sorry</h1>
      <p>We can't found your page 😢😢</p>
    </div>
  );
};

export default NotFound;
