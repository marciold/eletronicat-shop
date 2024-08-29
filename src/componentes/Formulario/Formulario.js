import React, { useState } from "react";

import "./Formulario.css";

import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import CampoTexto from "../CampoTexto/CampoTexto";
import BotaoRadio from "../BotaoRadio/BotaoRadio";
import BotaoEnviar from "../BotaoEnviar/BotaoEnviar";

function Formulario(props) {

  const listaMarcas = [
    { nome: "HP", img: "/img/hp.png" },
    { nome: "ASUS", img: "/img/asus.png" },
    { nome: "Dell", img: "/img/dell.png" },
    { nome: "Positivo", img: "/img/positivo.png" },
    { nome: "Generico", img: "/img/generico.png" },
  ];

  const envio = (evento) => {
    evento.preventDefault();
    props.produtos({
      secao: secao,
      marca: marca,
      nome: nome,
      preco: preco,
      estado: estado,
    });

    setSecao("Computadores");
    setMarca(listaMarcas[0]);
    setNome("");
    setPreco("");
  };

  const [secao, setSecao] = useState("Computadores");
  const [marca, setMarca] = useState(listaMarcas[0]);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [estado, setEstado] = useState("Novo");

  return (
    <section className="formulario">
      <form onSubmit={envio} className="form-itens">
        <h2>Dados do Produto</h2>

        <ListaSuspensa
          label="Seção"
          itens={props.listaSecoes}
          aoEnviado={(valor) => setSecao(valor)}
          estadoInicial={secao}
        />

        <ListaSuspensa
          label="Marca"
          itens={listaMarcas.map((marca) => marca.nome)}
          aoEnviado={(valor) =>
            setMarca(listaMarcas.find((marca) => marca.nome === valor))
          }
          estadoInicial={marca.nome}
        />

        <CampoTexto
            label="Nome"
            placeholder="Nome do produto"
          aoEnviado={(valor) => setNome(valor)}
          estadoInicial={nome}
          type="text"
        />

        <CampoTexto
          label="Preço"
          placeholder="Preço do produto"
          aoEnviado={(valor) => setPreco(valor)}
          estadoInicial={preco}
          type="number"
        />

        <BotaoRadio
          label1="Novo"
          label2="Usado"
          aoEnviado={(valor) => setEstado(valor)}
        />

        <BotaoEnviar>Cadastrar Produto</BotaoEnviar>
      </form>
    </section>
  );
}
export default Formulario;
