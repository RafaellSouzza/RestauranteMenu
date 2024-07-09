// src/components/Main.js
import React from 'react';
import DishCard from './DishCard';

function Main({ pratosFiltrados, adicionarAoPedido, abrirPersonalizacao }) {
  return (
    <div className="main">
      {pratosFiltrados.length > 0 ? (
        <div className="pratos-container">
          {pratosFiltrados.map(prato => (
            <div key={prato.id} id={prato.categoria.replace(/\s+/g, '-').toLowerCase()}>
              <DishCard
                prato={prato}
                adicionarAoPedido={adicionarAoPedido}
                abrirPersonalizacao={abrirPersonalizacao}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="w-full text-center">Nenhum prato disponível nesta categoria</p>
      )}
    </div>
  );
}

export default Main;
