import React from "react";
import ReactDom from "react-dom";
import { useParams, Link } from "react-router-dom";

import style from "./QuickView.module.css";

function BackDrop() {
  return <div className={style.backdrop} />;
}

function OverLay(props) {
  return (
    <div className={style["modal"]}>
      <div className={style["quickview"]}>
        <div className={style["quickview-item"]}>
          <img src="https://images.unsplash.com/photo-1595468136654-faa5b6ea3ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
          <div className={style["quickview-contents"]}>
            <h1>This is Product</h1>
            <p>$ 99</p>
            <label>Quantity</label>
            <input type="number" placeholder="1" min="0" />
            <button>Add to cart</button>
            <Link to="/product/1" href="#">
              View More Details
            </Link>
          </div>
          <button onClick={props.onClick} className={style["exit-button"]}>
            x
          </button>
        </div>
      </div>
    </div>
  );
}

const QuickView = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <BackDrop />,
        document.getElementById("backdrop-root")
      )}
      ,
      {ReactDom.createPortal(
        <OverLay onClick={props.onClick} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default QuickView;
