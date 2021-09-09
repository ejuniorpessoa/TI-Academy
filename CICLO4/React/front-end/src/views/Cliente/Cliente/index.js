import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { api } from "../../../config";

export const Cliente = (props) => {/* props = propriedades passadas */
    console.log(props.match.params.id);/* match relaciona os parâmetros*/

    const [data, setData] = useState([]);/* array com 2 informações, "valor e valor atribuido a ele" */
    const [id] = useState(props.match.params.id)/* informar que esse cara foi passado como paramentro, dado inicial é o "ID" */

    useEffect(() => { /* useEffect = Vai criar e instanciar um objeto */
        const getCliente = async () => {
            await axios.get(api + "/cliente/" + id)
                .then((response) => {
                    setData(response.data.cliente);/* linha que buga!! */
                }).catch(() => {
                    console.log("Erro: Não foi possível conectar a API.")
                })
        }
        getCliente();/* instanciando, colocando dentro dele */
    }, [id]);

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="mr-auto p-2">
                        <h1>Informações do Cliente</h1>
                    </div>
                    <div className="p-2">
                        <Link to="/visualizarcliente"
                            className="btn btn-outline-primary btn-sm">
                            Clientes
                        </Link>
                    </div>
                </div>
                <dl className="row">
                    <dt className="col-sm-3">Nome</dt>
                    <dd className="col-sm-9">{data.nome}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Endereço</dt>
                    <dd className="col-sm-9">{data.endereco}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Cidade</dt>
                    <dd className="col-sm-9">{data.cidade}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">UF</dt>
                    <dd className="col-sm-9">{data.nome}</dd>
                </dl>
                <dl className="row">
                    <dt className="col-sm-3">Data de Nascimento</dt>
                    <dd className="col-sm-9">{data.nascimento}</dd>
                </dl>
            </Container>
        </div>
    )
}