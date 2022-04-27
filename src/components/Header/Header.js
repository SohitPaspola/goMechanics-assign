import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import "./Header.css";

const Header = () => {
  const { setButtonColor } = useContext(ProductContext);
  const [checked, setChecked] = useState("blue");

  const radioBtnChangeHandler = (event) => {
    setChecked(event.target.name);
    setButtonColor(event.target.name);
  };

  return (
    <div className="header-cont">
      <input
        name="blue"
        type="radio"
        id="blue"
        onChange={radioBtnChangeHandler}
        checked={checked === "blue"}
      ></input>
      <label htmlFor="blue">blue</label>
      <input
        name="red"
        type="radio"
        id="red"
        onChange={radioBtnChangeHandler}
        checked={checked === "red"}
      ></input>
      <label htmlFor="red">red</label>
    </div>
  );
};

export default Header;
