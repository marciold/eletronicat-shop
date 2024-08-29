/**
 * 
 * Dupla: Márcio Dantas e Giullia Cuerva
 * WEB 2
 * 
 **/

import React, { useState } from "react";

import Header from "./componentes/Header/Header";
import Formulario from "./componentes/Formulario/Formulario";
import AreaProdutos from "./componentes/AreaProdutos/AreaProdutos";


function App() {
  const listaSecoes = [
    "Computadores",
    "Acessórios",
    "Impressoras",
    "Games",
    "Gadgets",
  ];

  const [dados, setDados] = useState([]);
  const [area, setArea] = useState([]);

  const adcionaProduto = (prod) => {
    const DadosAtt = dados.slice();
    DadosAtt.push(prod);
    setDados(DadosAtt);
  };

  const areaVisivel = (Area, isChecked) => {
    const areaAtt = isChecked
      ? [...area, Area]
      : area.filter((item) => item !== Area);
    setArea(areaAtt);
  };

  return (
    <div className="App">
      <Header listaSecoes={listaSecoes} areaDefinida={areaVisivel} />
      <Formulario
        listaSecoes={listaSecoes}
        produtos={(prod) => adcionaProduto(prod)}
      />
      <AreaProdutos
        productArea={area}
        produtos={dados.filter((prods) => area.includes(prods.secao))}
      />
    </div>
  );
}

export default App;
