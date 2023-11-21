import React, { useState } from "react";
import "./ContadorInteligente.css";

function ContadorInteligente() {

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <p>Consumo atual da energia: </p>
      <h6 className="text-consume">{count} kwh</h6>

      <div>
        <button className="button"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          Diminuir consumo -
        </button>

        <button className="button" onClick={() => setCount(count + 1)}>Aumentar consumo +</button>
      </div>
    </div>
  );
}

export default ContadorInteligente;
