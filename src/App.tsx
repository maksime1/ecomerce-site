import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Shopping from "./Shopping";

function App() {
  const [productCount, setProductCount] = useState<number>(0);
  const [showCart, setShowCart] = useState<boolean>(false);

  return (
    <>
      <Header
        productCount={productCount}
        setProductCount={setProductCount}
        showCart={showCart}
        setShowCart={setShowCart}
      />
      <Shopping
        productCount={productCount}
        setProductCount={setProductCount}
        showCart={showCart}
        setShowCart={setShowCart}
      />
    </>
  );
}

export default App;
