// src/components/Sidebar.js
import React from 'react';

function Sidebar({ selecionarCategoria }) {
  const categorias = [
    'Pratos de Entrada', 'Prato Principal', 'Sobremesas', 'Hambúrgueres', 'Petiscos', 'Chás', 'Sucos', 'Bebidas'
  ];

  return (
    <div className="sidebar bg-gray-800 text-white p-4 overflow-y-auto">
      <div className="category-list grid grid-cols-1 gap-4">
        {categorias.map(categoria => (
          <div
            key={categoria}
            className="square bg-gray-700 p-4 rounded cursor-pointer"
            onClick={() => selecionarCategoria(categoria)}
          >
            {categoria}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
