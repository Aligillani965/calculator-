import styles from "./App.module.css";
import Display from "./Display";
import ButtonsContainer from "./ButtonsContainer";
import "./App.css";
import { useState } from "react";
function App() {
  const [myVal, setVal] = useState("");
  const onButtonclick = (buttonText) => {
    if (buttonText === "c") {
      setVal("");
    } else if (buttonText === "=") {
      const result = eval(myVal);
      setVal(result);
    } else {
      const newDisplayValue = myVal + buttonText;
      setVal(newDisplayValue);
    }
  };
  return (
    <>
      <div className={styles.calculator}>
        <center>
          <h1>calculator</h1>
        </center>
        <Display myVal={myVal}></Display>
        <ButtonsContainer onButtonclick={onButtonclick}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
