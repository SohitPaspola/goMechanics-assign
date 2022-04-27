import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Button from "../UI/Button";
import "./CartSection.css";

const CartSection = () => {
  const { cartData, totalItem, setCartData } =
    useContext(ProductContext);
  // let data = CartData ? CartData : 'cart is empty'

  const checkoutHandler = () => {
    setCartData([]);
  };

  return (
    <div className="cart-section">
      <div className="cart-head">
        <h3>Cart</h3>
        <h3>{totalItem} items</h3>
      </div>
      {cartData.length !== 0 ? (
        cartData.map((item) => {
          return (
            <div className="cart-data" key={Math.random().toString()}>
              {item}
            </div>
          );
        })
      ) : (
        <p>Your Cart is empty</p>
      )}
      <div className="checkout-btn">
        <Button handleClick={checkoutHandler}>Checkout</Button>
      </div>
    </div>
  );
};

export default CartSection;
