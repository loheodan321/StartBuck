import style from "./Product.module.css";
import React from "react";

const Product = (props) => {
  const unParseData = localStorage.getItem("data");

  const parsedData = JSON.parse(unParseData);

  return (
    <div className={style["product"]}>
      <div className={style["item"]}>
        <div className={style["product-item"]}>
          <img src={parsedData.imgLink} alt={`img-${parsedData.id}`} />
          <div className={style["product-contents"]}>
            <h1>{parsedData.name}</h1>
            <p>$ {parsedData.price}</p>
            <label>Quantity</label>
            <input type="number" placeholder="1" min="0" />
            <button>Add to cart</button>
          </div>
        </div>
      </div>
      <div className={style["policy-contents"]}>
        <div className={style["content"]}>
          <h1>Product Info</h1>
          <p>
            I'm a product detail. I'm a great place to add more information
            about your product such as sizing, material, care and cleaning
            instructions. This is also a great space to write what makes this
            product special and how your customers can benefit from this item.
          </p>
        </div>
        <div className={style["content"]}>
          <h1>Product Info</h1>
          <p>
            I'm a product detail. I'm a great place to add more information
            about your product such as sizing, material, care and cleaning
            instructions. This is also a great space to write what makes this
            product special and how your customers can benefit from this item.
          </p>
        </div>
        <div className={style["content"]}>
          <h1>Product Info</h1>
          <p>
            I'm a product detail. I'm a great place to add more information
            about your product such as sizing, material, care and cleaning
            instructions. This is also a great space to write what makes this
            product special and how your customers can benefit from this item.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
