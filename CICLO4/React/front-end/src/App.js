import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' //{ as= apelido}
import { Home } from "./views/Home/";// adicionar o Home, vem de 
import { VisualizarServico } from './views/Servico/VisualizarServico';
import { Menu } from './components/Menu';
import { Servico } from './views/Servico/Servico';
import { Cliente } from './views/Cliente/Cliente';
import { VisualizarCliente } from './views/Cliente/VisualizarCliente';

function App() {
  return (
    <div>
      <Menu />
      <Router>
        <Switch>
          {/* exact / exatamente a barra // path a rota de acesso */}
          <Route exact path="/" component={Home} /> {/* "/" no final fecha */}
          <Route path="/visualizarservico" component={VisualizarServico} />
          <Route path="/servico/:id" component={Servico} />
          <Route path="/visualizarcliente" component={VisualizarCliente} />
          <Route path="/cliente/:id" component={Cliente} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;