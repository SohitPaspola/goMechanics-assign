import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "./Button.css";

const Button = (props) => {
  const { buttonColor } = useContext(ProductContext);

  const classname = `${props.className} ${buttonColor}`;

  return (
    <button className={classname} onClick={props.handleClick}>
      {props.children}
    </button>
  );
};

export default Button;
