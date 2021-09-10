import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' //{ as= apelido}
import { Home } from "./views/Home/";// adicionar o Home, vem de 
import { VisualizarServico } from './views/Servico/VisualizarServico';
import { Menu } from './components/Menu';
import { Servico } from './views/Servico/Servico';
import { Cliente } from './views/Cliente/Cliente';
import { VisualizarCliente } from './views/Cliente/VisualizarCliente';
import { CadastrarServico } from './views/Servico/CadastrarServico';
import { EditarServico } from './views/Servico/EditarServico';
import { CadastrarCliente } from './views/Cliente/CadastrarCliente';
import { EditarCliente } from './views/Cliente/EditarCliente';

function App() {
  return (
    <div>
      <Menu />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/visualizarservico" component={VisualizarServico} />
          <Route path="/servico/:id" component={Servico} />
          <Route path="/cadastrarservico" component={CadastrarServico} />
          <Route path="/editarservico/:id" component={EditarServico} />
          <Route path="/visualizarcliente" component={VisualizarCliente} />
          <Route path="/cliente/:id" component={Cliente} />
          <Route path="/cadastrarcliente" component={CadastrarCliente} />
          <Route path="/editarcliente/:id" component={EditarCliente} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;