import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useFetch from "../../../FetchHook/useFetch";

import { cartSliceAction } from "../../../store/CartSlice";
import QuickView from "../QuickView/QuickView";

import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const { getData } = useFetch();
  const [productList, setProductList] = useState([]);

  const [quickItem, setQuickItem] = useState({
    showQuickView: false,
    data: null,
  });

  const createQuickItem = () => {
    setQuickItem((pre) => {
      return { showQuickView: !pre.showQuickView, data: pre.data };
    });
  };

  useEffect(() => {
    const data = getData(
      "https://starbuck-efbbd-default-rtdb.asia-southeast1.firebasedatabase.app/products/-NC-27PG6jpDqDdrndK8.json"
    ).then((data) => {
      setProductList((pre) => [...pre, ...data]);
    });
  }, []);

  return (
    <>
      <div className={style["home"]}>
        <div className={style["home-hero-secion"]}>
          <h1>Starbuck</h1>
          <div>
            <h2>Girl with red hat</h2>
            <button className={style["btn"]}>Shop now</button>
          </div>
        </div>
        <div className={style["home-collection"]}>
          <div className={style["home-context"]}>
            <h1>Our Collection</h1>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a storet your users know a little more about you.
            </p>
          </div>
          <div className={style["home-items"]}>
            {productList.map((item) => (
              <div className={style["item"]} key={item.id}>
                <img src={item.imgLink} alt={`img-item-${item.id}`} />
                <div className={style["item-more-detail"]}>
                  <button
                    onClick={() => {
                      setQuickItem((pre) => {
                        return {
                          showQuickView: !pre.showQuickView,
                          data: item,
                        };
                      });
                    }}
                    className={style["quick-view"]}
                  >
                    Quick View
                  </button>
                </div>
                <p>{item.name}</p>
                <span>$ {item.price}</span>
                <button
                  onClick={() => {
                    dispatch(cartSliceAction.addCart(item));
                  }}
                  className={style["add-to-cart"]}
                >
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {quickItem.showQuickView && (
        <QuickView onClick={createQuickItem} data={quickItem.data} />
      )}
    </>
  );
};

export default Home;
