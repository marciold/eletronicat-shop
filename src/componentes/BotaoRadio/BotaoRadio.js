import React from "react";
import "./BotaoRadio.css";

function BotaoRadio(props) {
  const aoEnviado = (evento) => {
    props.aoEnviado(evento.target.value);
  };

  return (
    <div className="botao_radio item">
      <input
        type="radio"
        name="estadoDeUso"
        onChange={aoEnviado}
        value={props.label1}
      />
      <label>{props.label1}</label>

      <input
        type="radio"
        name="estadoDeUso"
        onChange={aoEnviado}
        value={props.label2}
      />
      <label>{props.label2}</label>
    </div>
  );
}
export default BotaoRadio;
