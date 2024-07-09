// src/components/CustomizeDish.js
import React from 'react';

function CustomizeDish({ prato, atualizarPersonalizacao }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Personalize seu {prato.nome}</h2>
      {/* Aqui você pode adicionar inputs e checkboxes para personalizar o prato */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={atualizarPersonalizacao}
      >
        Salvar Personalização
      </button>
    </div>
  );
}

export default CustomizeDish;
