import React, { useState } from "react";
import Nav from "../../components/Nav";
import Products from "../Products";
import { GlobalStyles, orange } from "./GlobalStyles";

function App() {
  const [color, setColor] = useState(orange);
  return (
    <div>
      <Nav setColor={setColor} />
      <Products color={color}/>
      <GlobalStyles />
    </div>
  );
}

export default App;
