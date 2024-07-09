// src/components/CustomizeDishModal.js
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    backgroundColor: '#1a202c',
    color: '#ffffff'
  },
};

Modal.setAppElement('#root');

function CustomizeDishModal({ prato, fecharPersonalizacao }) {
  return (
    <Modal
      isOpen={!!prato}
      onRequestClose={fecharPersonalizacao}
      style={customStyles}
      contentLabel="Personalizar Prato"
    >
      <h2 className="text-2xl font-bold mb-4">Personalizar {prato.nome}</h2>
      <form className="flex flex-col">
        <div className="mb-4">
          <label className="block text-gray-300">Opções de Personalização</label>
          <div className="flex flex-wrap">
            {prato.opcoes.map(opcao => (
              <div key={opcao.nome} className="w-1/3 p-2">
                <input type="checkbox" id={opcao.nome} name={opcao.nome} />
                <label htmlFor={opcao.nome} className="ml-2 text-gray-300">{opcao.nome}</label>
                <img src={opcao.imagem} alt={opcao.nome} className="w-full h-32 object-cover rounded mt-2" />
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="bg-green-500 text-white px-4 py-2 rounded self-end hover:bg-red-500"
          onClick={fecharPersonalizacao}
        >
          Salvar Personalização
        </button>
      </form>
    </Modal>
  );
}

export default CustomizeDishModal;
