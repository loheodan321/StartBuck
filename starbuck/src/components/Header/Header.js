import { NavLink } from "react-router-dom";

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
            <NavLink activeClassName={style["nav-active"]} to="/home">
              Home
            </NavLink>
            <NavLink activeClassName={style["nav-active"]} to="/about">
              About US
            </NavLink>
            <NavLink
              activeClassName={style["nav-active"]}
              to="/customer-service"
            >
              Customer Service
            </NavLink>
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
