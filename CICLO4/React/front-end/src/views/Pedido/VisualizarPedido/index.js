import { Container, Table } from "reactstrap"

export const VisualizarPedido = () => {
    return (
        <div className="p-3" >
            <Container>
                <Table striped dark hover>
                    <thead>{/* cabeçalho */}
                        <tr>
                            <th>Cliente ID</th>
                            <th>Serviço</th>
                            <th>Descrição</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>{/* corpo do texto */}
                        <tr>
                            <th scope="row">1</th>
                            <td>Criação de Páginas Estáticas</td>
                            <td>Criação de Páginas Estáticas e Manutenção</td>
                            <td>R$830,00</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}