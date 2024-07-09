// src/components/DishCard.js
import React from 'react';

function DishCard({ prato, adicionarAoPedido, abrirPersonalizacao }) {
  return (
    <div className="card">
      <img src={prato.imagem} alt={prato.nome} />
      <div className="content">
        <h2>{prato.nome}</h2>
        <p>{prato.descricao}</p>
        <p>Preço: R${prato.preco.toFixed(2)}</p>
        <div className="content-button">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-red-500"
            onClick={() => adicionarAoPedido(prato)}
          >
            Adicionar ao Pedido
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-red-500"
            onClick={() => abrirPersonalizacao(prato)}
          >
            Personalizar Prato
          </button>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
