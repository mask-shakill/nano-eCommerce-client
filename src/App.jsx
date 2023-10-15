import React from "react";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import NewProducts from "./components/Products/NewProducts";

const App = () => {
  return (
    <div>
      <Header />
      <Shop />
      {/* <NewProducts></NewProducts> */}
    </div>
  );
};

export default App;
