import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap"
import { api } from "../../../config";

export const VisualizarCliente = () => {

    const [data, setData] = useState([]);
    const [status, setStatus] = useState({
        type: "",
        message: ""
    });

    const getClientes = async () => {
        await axios.get(api + "/listaclientes")
            .then((response) => {
                console.log(response.data.clientes);
                setData(response.data.clientes);
            }).catch(() => {
                setStatus({
                    type: "Error",
                    message: "Erro: Não foi possível conectar a API."
                });
            });
    }

    useEffect(() => {
        getClientes();
    }, []);

    const apagarCliente = async (idCliente) => {
        console.log(idCliente);

        const headers = {
            "Content-Type": "application/json"
        }
        await axios.delete(api + "/apagarcliente/" + idCliente, { headers })
            .then((response) => {
                console.log(response.data.error);
                getClientes();/* <-- função para atualizar a página */
            })
            .catch(() => {
                setStatus({
                    type: "error",
                    message: "Erro: Não foi possível se conectar a API"
                });
            })
    }

    return (
        <div className="p-3">
            <Container>
                {status.type === "Error" ? <Alert color="danger">{status.message}</Alert> : ""}
                <div className="mr-auto p-2">
                    <h1>Informações dos Clientes</h1>
                </div>
                <div className="p-2">
                    <Link to="/cadastrarcliente"
                        className="btn btn-outline-primary btn-sm">
                        Cadastrar Cliente
                    </Link>
                </div>
                <Table striped dark hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>UF</th>
                            <th>Nascimento</th>
                            <th>Ações</th>   
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.nome}</td>
                                <td>{item.endereco}</td>
                                <td>{item.cidade}</td>
                                <td>{item.uf}</td>
                                <td>{item.nascimento}</td>
                                <td className="text-center">
                                    <Link to={"/cliente/" + item.id}
                                        className="btn btn-outline-primary btn-sm">Consultar
                                    </Link>
                                    <Link to={"/editarcliente/" + item.id}
                                        className="btn btn-outline-warning btn-sm m-1">Editar</Link>
                                    <span className="btn btn-outline-danger btn-sm m-1"
                                        onClick={() => apagarCliente(item.id)}>Excluir</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}