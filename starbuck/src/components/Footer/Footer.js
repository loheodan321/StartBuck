import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style["footer"]}>
      <div className={style["footer-contents"]}>
        <h1>Starbuck Studio</h1>
        <div className={style["address"]}>
          A: 81 Le Van Duyet, Ward 3, Binh Thanh Distric, HCM City
        </div>
        <div className={style["telephone"]}>T: 0933237470</div>
        <div className={style["email"]}>E: thanhdeptrai0307@gmail.com</div>
      </div>
      <div className={style["footer-input"]}>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <button className={style["btn"]}>Subcribte now</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
