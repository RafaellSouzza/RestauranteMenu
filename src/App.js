// src/App.js
import React, { useState } from 'react';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import OrderSummary from './components/OrderSummary';
import CustomizeDishModal from './components/CustomizeDishModal';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import { pratos } from './mockData';

function App() {
  const [pratoSelecionado, setPratoSelecionado] = useState(null);
  const [pedido, setPedido] = useState([]);
  const [personalizando, setPersonalizando] = useState(false);
  const [resumoVisivel, setResumoVisivel] = useState(false);
  const [numeroMesa, setNumeroMesa] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [termoPesquisa, setTermoPesquisa] = useState('');

  const selecionarPrato = (prato) => {
    setPratoSelecionado(prato);
    setPersonalizando(false);
  };

  const selecionarCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
    setPratoSelecionado(null);
  };

  const adicionarAoPedido = (prato) => {
    setPedido([...pedido, prato]);
  };

  const removerDoPedido = (index) => {
    const novoPedido = pedido.filter((_, i) => i !== index);
    setPedido(novoPedido);
  };

  const finalizarPedido = () => {
    alert('Pedido Finalizado!');
    setPedido([]);
  };

  const toggleResumo = () => {
    setResumoVisivel(!resumoVisivel);
  };

  const abrirPersonalizacao = (prato) => {
    setPratoSelecionado(prato);
    setPersonalizando(true);
  };

  const fecharPersonalizacao = () => {
    setPersonalizando(false);
  };

  const pratosFiltrados = pratos.filter(prato => {
    const matchCategoria = categoriaSelecionada ? prato.categoria === categoriaSelecionada : true;
    const matchPesquisa = termoPesquisa ? prato.nome.toLowerCase().includes(termoPesquisa.toLowerCase()) || prato.descricao.toLowerCase().includes(termoPesquisa.toLowerCase()) : true;
    return matchCategoria && matchPesquisa;
  });

  return (
    <div className="App flex h-screen bg-gray-900 text-white">
      <Topbar 
        numeroMesa={numeroMesa} 
        setNumeroMesa={setNumeroMesa} 
        toggleResumo={toggleResumo} 
        setTermoPesquisa={setTermoPesquisa}
      />
      <div className="flex flex-1">
        <Sidebar selecionarCategoria={selecionarCategoria} />
        <Main 
          pratosFiltrados={pratosFiltrados} 
          adicionarAoPedido={adicionarAoPedido} 
          abrirPersonalizacao={abrirPersonalizacao}
        />
        {resumoVisivel && (
          <div className="order-summary w-80 bg-gray-800 text-white p-4 rounded shadow">
            <OrderSummary 
              pedido={pedido} 
              finalizarPedido={finalizarPedido} 
              removerDoPedido={removerDoPedido}
            />
          </div>
        )}
      </div>
      {personalizando && (
        <CustomizeDishModal prato={pratoSelecionado} fecharPersonalizacao={fecharPersonalizacao} />
      )}
    </div>
  );
}

export default App;
