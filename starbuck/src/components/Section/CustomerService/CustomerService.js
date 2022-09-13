import style from "./CustomerService.module.css";

const CustomerService = () => {
  return (
    <div className={style["customerservice"]}>
      <div className={style["customerservice-contents"]}>
        <h1>SHIPPING POLICY</h1>
        <p>
          I’m a shipping policy section. I’m a great place to update your
          customers about your shipping methods, packaging and costs. Use plain,
          straightforward language to build trust and make sure that your
          customers stay loyal!
        </p>
        <p>
          I'm the second paragraph in your shipping policy section. Click here
          to add your own text and edit me. It’s easy. Just click “Edit Text” or
          double click me to add details about your policy and make changes to
          the font. I’m a great place for you to tell a story and let your users
          know a little more about you.
        </p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1610081176927-f151b9d555c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        alt="CustomerService-img"
      />
    </div>
  );
};

export default CustomerService;
