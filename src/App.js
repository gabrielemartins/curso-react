import React from 'react';
import './App.css';
import MenuSuperior from './components/menuSuperior/menusuperior';
import Resumo from './components/Resumo/Resumo'
import Consultas from './components/Consultas/consultas'
import Faturamento from './components/Faturamento/Faturamento'
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <MenuSuperior/>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <Switch>
                <Route path="/consultas" component = {Consultas} />
                <Route path="/faturamento" component = {Faturamento} />
                <Route path="/" component = {Resumo} />
              </Switch>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
