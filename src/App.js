import { useContext, useEffect } from "react";
import "./App.css";
import { ProductContext } from "./components/context/ProductContext";
import Header from "./components/Header/Header";
import CartSection from "./components/List/CartSection";
import ProductSection from "./components/List/ProductSection";

function App() {
  const { setData } = useContext(ProductContext);

  useEffect(() => {
    const fetchDatahandler = async () => {
      const response = await fetch("/api/products");
      const json = await response.json();
      // console.log(json.products);
      setData(json.products);
    };
    fetchDatahandler();
  }, [setData]);
  // console.log(data);

  return (
    <div className="App">
      <Header></Header>
      <section className="section">
        <ProductSection></ProductSection>
        <CartSection></CartSection>
      </section>
    </div>
  );
}

export default App;
