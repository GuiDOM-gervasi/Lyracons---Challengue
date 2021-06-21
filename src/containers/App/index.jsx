import React, { useState } from "react";
import Nav from "../../components/Nav";
import Products from "../Products";
import { GlobalStyles, orange } from "./GlobalStyles";

function App() {
  const [color, setColor] = useState(orange);
  const [hello, setHello] = useState(false);
  const [empty, setEmpty] = useState(false);
  return (
    <div>
      <Nav setColor={setColor} setHello={setHello} setEmpty={setEmpty} />
      <Products color={color} hello={hello} empty={empty} />
      <GlobalStyles />
    </div>
  );
}

export default App;
