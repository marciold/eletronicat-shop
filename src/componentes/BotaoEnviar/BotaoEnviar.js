import React from "react";
import "./BotaoEnviar.css"

const BotaoEnviar = (props) => {
  return <div className="post-btns"><button>{props.children}</button></div>;
};

export default BotaoEnviar;
