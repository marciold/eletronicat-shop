import React from "react";
import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  const selecionado = (event) => {
    props.aoEnviado(event.target.value);
  };

  return (
    <div className="item">
      <label>{props.label}</label>
      <select value={props.estadoInicial} onChange={selecionado} required>
        {props.itens.map((obj) => (
          <option key={obj}>{obj}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
