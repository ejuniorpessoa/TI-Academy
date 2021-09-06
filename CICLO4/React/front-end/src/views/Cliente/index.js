import { Container, Table } from "reactstrap"

export const VisualizarCliente = () =>{
    return(
        <div className="p-3">
            <Container>
                <Table striped dark hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Serviço</th>
                            <th>Custo Serviço</th>
                        </tr>                        
                    </thead>
                    <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Edson Carlos Pessoa Júnior</td>
                                <td>Criação de Páginas Estáticas e Manutenção Preventiva</td>
                                <td>R$830,00</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Edinaldo Pereira</td>
                                <td>Cantor</td>
                                <td>R$5.323,43</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Alice Sanches Pereira</td>
                                <td>Desenvolvimento de API</td>
                                <td>R$3.734,62</td>
                            </tr>
                        </tbody>
                </Table>
            </Container>
        </div>
    )
}