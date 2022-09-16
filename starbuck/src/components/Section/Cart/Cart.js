import { useSelector, useDispatch } from "react-redux";

import { cartSliceAction } from "../../../store/CartSlice";

import style from "./Cart.module.css";

const Cart = () => {
  const dispatch = useDispatch();
  const productlist = useSelector((state) => state.cartSlice.productlist);

  const removeProductList = (id) => {
    dispatch(cartSliceAction.removeCart(id));
  };

  return (
    <div className={style["cart"]}>
      <div className={style["cart-header"]}>
        <h1>Cart</h1>
      </div>
      <div className={style["cart-section"]}>
        {productlist.map((item) => (
          <div key={item.id} className={style["cart-item"]}>
            <img src={item.imgLink} alt={`img-${item.id}`} />
            <div className={style["cart-contents"]}>
              <h1>{item.name}</h1>
              <span>Quantity</span>
              <input type="number" min="0" placeholder="1" />
            </div>
            <div className={style["cart-clear"]}>
              <button onClick={removeProductList(item.id)}>x</button>
              <span>{`$ ${item.price}`}</span>
            </div>
          </div>
        ))}
      </div>
      <button className={style["btn"]}>Check out</button>
    </div>
  );
};

export default Cart;
