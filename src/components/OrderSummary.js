// src/components/OrderSummary.js
import React from 'react';
import { TrashFill } from 'react-bootstrap-icons';

function OrderSummary({ pedido, finalizarPedido, removerDoPedido }) {
  const total = pedido.reduce((soma, prato) => soma + prato.preco, 0);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Resumo do Pedido</h2>
      <ul className="list-none p-0 mb-4">
        {pedido.map((prato, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            <span>
              {prato.nome} - R${prato.preco.toFixed(2)}
            </span>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => removerDoPedido(index)}
            >
              <TrashFill />
            </button>
          </li>
        ))}
      </ul>
      <p className="text-xl font-bold mb-4">Total: R${total.toFixed(2)}</p>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={finalizarPedido}
      >
        Finalizar Pedido
      </button>
    </div>
  );
}

export default OrderSummary;
