import { createContext, useState } from "react";

const ProductContext = createContext()

const DataProvider = ( {children} ) => {

    const [data, setData] = useState(null);
    const [cartData, setCartData] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [totalItem, setTotalItem] = useState(0);
    const [buttonColor, setButtonColor] = useState('blue')


    let value = {
        data, setData, cartData, setCartData, isChecked, setIsChecked, totalItem, setTotalItem, buttonColor, setButtonColor
    }

    return(
        <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
    );
};


export {DataProvider, ProductContext};