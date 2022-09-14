import { useState } from "react";
import QuickView from "../QuickView/QuickView";

import style from "./Home.module.css";

const dummyData = [
  {
    id: 1,
    name: "Product 01",
    price: 69,
    imgLink:
      "https://images.unsplash.com/photo-1595468136654-faa5b6ea3ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    description: "This is description",
  },
  {
    id: 2,
    name: "Product 02",
    price: 69,
    imgLink:
      "https://images.unsplash.com/photo-1631424542224-54dc0ddb69b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    description: "This is description",
  },
  {
    id: 3,
    name: "Product 03",
    price: 69,
    imgLink:
      "https://images.unsplash.com/photo-1626250668234-c02b35a88be6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    description: "This is description",
  },
  {
    id: 4,
    name: "Product 04",
    price: 69,
    imgLink:
      "https://images.unsplash.com/photo-1621236378699-8597faf6a176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=723&q=80",
    description: "This is description",
  },
  {
    id: 5,
    name: "Product 05",
    price: 69,
    imgLink:
      "https://images.unsplash.com/photo-1596685025950-972199f62c0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
    description: "This is description",
  },
  {
    id: 6,
    name: "Product 06",
    price: 69,
    imgLink:
      "https://images.unsplash.com/photo-1617916487369-e0bb123f3637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    description: "This is description",
  },
  {
    id: 7,
    name: "Product 07",
    price: 69,
    imgLink:
      "https://images.unsplash.com/photo-1617916440036-5977832e49d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    description: "This is description",
  },
  {
    id: 8,
    name: "Product 08",
    price: 69,
    imgLink:
      "https://images.unsplash.com/photo-1596685679283-f17855e14f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    description: "This is description",
  },
  {
    id: 9,
    name: "Product 09",
    price: 69,
    imgLink:
      "https://images.unsplash.com/photo-1616205255807-b55f2513eced?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    description: "This is description",
  },
];

const Home = () => {
  const [quickItem, setQuickItem] = useState({
    showQuickView: false,
    data: null,
  });

  const createQuickItem = (event) => {
    setQuickItem((pre) => {
      return { showQuickView: !pre.showQuickView, data: pre.data };
    });
  };
  console.log(quickItem);

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
            {dummyData.map((item) => (
              <div className={style["item"]} key={item.id}>
                <img src={item.imgLink} alt={`img-item-${item.id}`} />
                <div className={style["item-more-detail"]}>
                  <button
                    onClick={() =>
                      setQuickItem((pre) => {
                        return {
                          showQuickView: !pre.showQuickView,
                          data: item,
                        };
                      })
                    }
                    className={style["quick-view"]}
                  >
                    Quick View
                  </button>
                </div>
                <p>{item.name}</p>
                <span>$ {item.price}</span>
                <button className={style["add-to-cart"]}>Add to cart</button>
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
