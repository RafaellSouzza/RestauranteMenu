// src/components/Topbar.js
import React from 'react';
import { CursorFill } from 'react-bootstrap-icons';

function Topbar({ numeroMesa, setNumeroMesa, toggleResumo, setTermoPesquisa }) {
  return (
    <div className="topbar bg-red-600 text-white flex items-center p-4 w-full">
      <div className="logo flex-1">
        <CursorFill className="w-8 h-8"  />
      </div>
      <div className="menu-options flex space-x-4">
        <div className="flex items-center space-x-1">
          <i className="bi bi-table"></i>
          <span>
            Mesa
            <input
              type="text"
              value={numeroMesa}
              onChange={(e) => setNumeroMesa(e.target.value)}
              className="ml-2 w-16 bg-gray-700 text-white rounded px-2"
              placeholder="Número"
            />
          </span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <input
            type="text"
            placeholder="Buscar..."
            onChange={(e) => setTermoPesquisa(e.target.value)}
            className="ml-2 w-48 bg-gray-700 text-white rounded px-2"
          />
          <i className="bi bi-search"></i>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <i className="bi bi-person"></i>
          <span>Chamar Garçom</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <i className="bi bi-person-circle"></i>
          <span>Minha Conta</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer" onClick={toggleResumo}>
          <i className="bi bi-cart-plus"></i>
          <span>Carrinho</span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
