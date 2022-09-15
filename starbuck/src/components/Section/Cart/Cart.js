import style from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={style["cart"]}>
      <div className={style["cart-header"]}>
        <h1>Cart</h1>
      </div>
      <div className={style["cart-section"]}>
        <div className={style["quickview-item"]}>
          <img
            src="https://images.unsplash.com/photo-1631424542224-54dc0ddb69b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
            alt={`img `}
          />
          <div className={style["quickview-contents"]}>
            <h1>Name here</h1>
            <span>Quantity</span>
            <input type="number" min="0" placeholder="1" />
          </div>
          <div className={style["quickview-clear"]}>
            <button>x</button>
            <span>Price here</span>
          </div>
        </div>
      </div>
      <button className={style["btn"]}>Check out</button>
    </div>
  );
};

export default Cart;
