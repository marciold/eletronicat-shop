import React from "react";
import "./CampoTexto.css"

const CampoTexto = (props) => {
  const selecionado = (event) => {
    const valor = event.target.value;

    if (props.type === "number") {
      const numero = Number(valor);
      if (!isNaN(numero) && numero >= 0) {
        props.aoEnviado(valor);
      } else if (valor === "") {
        props.aoEnviado("");
      }
    } else {
      props.aoEnviado(valor);
    }
  };

  return (
    <div className="item">
      <label>{props.label}</label>
      <input className="inputs"
        value={props.estadoInicial}
        placeholder={props.placeholder}
        onChange={selecionado}
        required
        type={props.type || "text"}
      />
    </div>
  );
};

export default CampoTexto;
