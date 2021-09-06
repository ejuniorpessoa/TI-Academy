import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' //{ as= apelido}
import { Home } from "./views/Home/";// adicionar o Home, vem de 
import { VisualizarCliente } from "./views/Cliente";// so coloca o nome do arquivo dps da / final, caso possua mais de 1 ou que nao seja nome index

import { VisualizarPedido } from './views/Pedido/VisualizarPedido/';

import { VisualizarServico } from './views/Servico/VisualizarServico';

import { Menu } from './components/Menu';
import { Servico } from './views/Servico/Servico';

function App() {
  return (
    <div>
      <Menu />
      <Router>
        <Switch>
           {/* exact / exatamente a barra // path a rota de acesso */}
          <Route exact path="/" component={Home} /> {/* "/" no final fecha */}
          <Route path="/visualizarcliente" component={VisualizarCliente} />
          <Route path="/visualizarpedido" component={VisualizarPedido}/>
          <Route path="/visualizarservico" component={VisualizarServico} />
          
          <Route path="/servico/:id" component={Servico} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;