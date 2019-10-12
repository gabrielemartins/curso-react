import React from 'react';
import './App.css';
import MenuSuperior from './components/menuSuperior/menusuperior';
import Resumo from './components/Resumo/Resumo'
import Consultas from './components/Consultas/consultas'
import Faturamento from './components/Faturamento/Faturamento'

function App() {
  return (
    <div className="App">
      <MenuSuperior/>
      <Resumo/>
      <Consultas/>
      <Faturamento/>
    </div>
  );
}

export default App;
