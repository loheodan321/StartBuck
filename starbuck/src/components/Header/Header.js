import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style["header"]}>
      <div className={style["logo-site"]}>
        <img
          src="https://www.freepnglogos.com/uploads/skeleton-starbucks-logo-png-29.png"
          alt="logo-img"
        />
        <span>Starbuck</span>
      </div>
      <div className={style["header-menu"]}>
        <nav>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About US</li>
            <li>Customer Service</li>
          </ul>
        </nav>
      </div>
      <div className={style["header-user"]}>
        <span>Cart</span>
        <div>0</div>
      </div>
    </div>
  );
};

export default Header;
