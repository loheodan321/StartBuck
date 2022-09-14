import React from "react";
import ReactDom from "react-dom";
import { useParams, Link } from "react-router-dom";

import style from "./QuickView.module.css";

function BackDrop() {
  return <div className={style.backdrop} />;
}

function OverLay(props) {
  const data = props.data;
  return (
    <div className={style["modal"]}>
      <div className={style["quickview"]}>
        <div className={style["quickview-item"]}>
          <img src={data.imgLink} />
          <div className={style["quickview-contents"]}>
            <h1>{data.name}</h1>
            <p>$ {data.price}</p>
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
        <OverLay onClick={props.onClick} data={props.data} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default QuickView;
