import style from "./Product.module.css";

const Product = () => {
  return (
    <div className={style["product"]}>
      <div className={style["item"]}>
        <div className={style["product-item"]}>
          <img src="https://images.unsplash.com/photo-1595468136654-faa5b6ea3ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
          <div className={style["product-contents"]}>
            <h1>This is Product</h1>
            <p>$ 99</p>
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
