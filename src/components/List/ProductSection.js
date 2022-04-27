import { useContext, useEffect, useRef, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Button from "../UI/Button";
import "./ProductSection.css";

const ProductSection = () => {
  const { data, cartData, setCartData, setTotalItem } =
    useContext(ProductContext);

  const initialValue = {
    product1: false,
    product2: false,
    product3: false,
    product4: false,
    product5: false,
  };

  useEffect(() => {
    setTotalItem(cartData.length);
  }, [cartData, setTotalItem]);
  const [checkedItem, setCheckedItem] = useState(initialValue);
  const inputRef = useRef("");

  const searchButtonHandler = () => {
    const input = inputRef.current.value;
    console.log(input);
  };

  const addToCartHandler = (e) => {
    console.log("add to cart");
    const checkedArr = Object.entries(checkedItem);
    const filtered = checkedArr.filter(([key, value]) => value === true);
    const filteredProduct = Object.keys(Object.fromEntries(filtered));
    setCartData((prev) => [...prev, ...filteredProduct]);
    setCheckedItem(initialValue);
  };

  const handleCheckbox = (event) => {
    setCheckedItem({
      ...checkedItem,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="product-section">
      <div className="search">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter Product name here"
        ></input>
        <Button handleClick={searchButtonHandler}>Search</Button>
      </div>
      {/* <div className="products-div"> */}
      {data &&
        data.map((item) => {
          return (
            <div className="product" key={Math.random().toString()}>
              <input
                type="checkbox"
                checked={checkedItem[item.name]}
                name={item.name}
                value={item.name}
                onChange={handleCheckbox}
                id={item.id}
              ></input>
              <label htmlFor="product">{item.name}</label>
            </div>
          );
        })}
      {/* </div> */}
      <div>
        <Button className="product-btn" handleClick={addToCartHandler}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductSection;
