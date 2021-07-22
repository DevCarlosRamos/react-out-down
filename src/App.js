import { useState } from "react";
import "./styles.css";

export default function App() {
  const [numero, setNumero] = useState(0);

  //this is a function for increment
  const incrementar = () => {
    event.preventDefault();
    setNumero(numero + 1);
  };

  //this is a function for reduce
  const desminuir = () => {
    event.preventDefault();
    setNumero(numero - 1);
  };

  return (
    <div className="App">
      <div> Numero </div>
      <br />
      <button onClick={incrementar}> aumentar </button>
      <br />
      <br />
      <div>{numero}</div>
      <br />
      <button onClick={desminuir}> disminuir </button>
      <br />
    </div>
  );
}
