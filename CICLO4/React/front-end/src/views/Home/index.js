import { Container } from "reactstrap"; //para utilizar o container declarado em em Menu.js

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex "> {/* flex box em botstrap */}
                    <div className="mr-auto p-2">{/* padding 2 */}
                        <h1>Home</h1>
                    </div>
                    <div className="p-2">
                        <a href="/visualizarcliente"
                            className="btn btn-outline-primary btn-sm">Cliente
                        </a>{/*sm=small botao/outline = quando passa o mouse */}
                    </div>
                    <div className="p-2">
                        <a href="/visualizarservico"
                            className="btn btn-outline-primary btn-sm">Serviço
                        </a>{/*sm=small botao/outline = quando passa o mouse */}
                    </div>
                    <div className="p-2">
                        <a href="/visualizarpedido"
                            className="btn btn-outline-primary btn-sm">Pedido
                        </a>{/*sm=small botao/outline = quando passa o mouse */}
                    </div>
                </div>
            </Container>
        </div>
    )
} //chamar arquivo Home por função
