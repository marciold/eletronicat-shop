import React from "react";
import "./Header.css";
import CheckBox from "../CheckBox/CheckBox";

function Header(props) {
  return (
    <div className="header">
      <header className="header-item">
        <img
          className="list-item"
          src="/img/gato-site.png"
          alt="header da loja"
        />
        <h1 className="name-shop">EletroniCat Shop</h1>
        <ul className="header-item">
          {props.listaSecoes.map((secao) => (
            <CheckBox
              key={secao}
              nome={secao}
              definirArea={props.areaDefinida}
            />
          ))}
        </ul>
      </header>
    </div>
  );
}

export default Header;
