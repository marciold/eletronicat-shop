import React from "react";
import ListaProdutos from "../ListaProdutos/ListaProdutos";
import "./AreaProdutos.css";

const AreaProdutos = (props) => {

  return  ( 
    <main className="area">
      <h3 className="produtos-title">Produtos</h3>
      <div className="area-prod">
      {props.productArea.length > 0 ? 
        (props.productArea.map((section, index) => (
          <div key={index}>
            <h4 className="secao">{section}</h4>
            <div className="area-itens">
            {props.produtos
              .filter((products) => section === products.secao).length > 0 ? props.produtos
                .filter((products) => section === products.secao) 
                .map((product, idx) => (
                  <ListaProdutos key={idx} product={product} className="item"/>
                )) : <p>Não há produtos cadastrados</p>
              }
            </div>
          </div>
        ))) : <p>Selecione uma seção de produtos!</p>}
      </div>
    </main>
  );
};

export default AreaProdutos;
