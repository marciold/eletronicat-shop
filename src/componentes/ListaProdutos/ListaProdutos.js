import React from "react";
import "./ListaProdutos.css";

const ListaProdutos = (props) => {
  const dadosProduto = props.product;
  return (
    <div className="card">
      <div className="cabecalho">
        <img src={dadosProduto.marca.img} alt={dadosProduto.nome} />
      </div>
      <div className="rodape">
        <h4>{dadosProduto.nome}</h4>
        <h5>{"R$" + dadosProduto.preco}</h5>
        <h5>{dadosProduto.estado}</h5>
      </div>
    </div>
  );
};

export default ListaProdutos;
