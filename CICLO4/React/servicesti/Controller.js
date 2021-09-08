const express = require('express');// <--requer módulo("express")
const cors = require('cors');
const { Op } = require('sequelize');

const models = require('./models'); // para os models - requer pasta ./models, faz mensao a pasta models

const app = express();
app.use(cors());
app.use(express.json());//aplicação utiliza as rotas (express) com arquivos JSON

let cliente = models.Cliente;
let servico = models.Servico;// relação com a classe
let pedido = models.Pedido;


app.get('/', function (req, res) {
    res.send('Olá Mundo!'); // get sempre pega resposta
}); //função vem junto de uma tag com tipo de requisição a fazer

// ------------------Aula-01-----------------
app.post('/clientes', async (req, res) => {
    let create = await cliente.create(
        req.body
    );
    res.send('Novo cliente cadastrado!');
});

app.post('/pedidos', async (req, res) => {
    let create = await pedido.create(
        req.body
    );
    res.send('Novo pedido cadastrado!');
});

// ------------------Aula-02-----------------
//usamos post no Postman que pega fora da aplicação
app.post('/servicos', async (req, res) => {// criar novo serviço

    await servico.create(// forma estática
        req.body //requisição no corpo da pagina, não é mais objeto 
        /* NECESSITA USAR O THEN E O CATCH PARA O PROMISE*/
    );
    res.send('Um novo serviço foi inserido!');
    /* FUNÇÃO AGUARDAR */
    await aguardar(3000); /* milisegundos */
    /* recebe como parâmetro os ms */
    function aguardar(ms) {
        /* Promise é utilizado quando tem uma resposta que envolve o then e o catch */
        return new Promise((resolve) => {
            /* função de tempo do Promise , precisa importar / resolve é o retorno dela*/
            setTimeout(resolve.ms);
        });
    };    
});
//---------------Serviços-por-ordem-de-nomes---------------
app.get('/listaservicos', async (req, res) => {
    await servico.findAll({//<-- método de busca "findAll()""
        //raw:true - linha como verdadeiro
        order: [['nome', 'DESC']] //propriedades findAll, [nome, descendente], ordem decrescente
    }).then(function (servicos) {// se der certo vai voltar uma função de todos os servicos
        res.json({ servicos }) // gera um array de serviços
    });
});

//-------------------Lista-Clientes-------------------
app.get('/listaclientes', async (req, res) => {
    await cliente.findAll({
        //        raw:true  // listando desordenadamente...
        order: [['nome', 'ASC']]
    }).then(function (clientes) {
        res.json({ clientes })
    });
});

// ---------------Exercício-Aula-04-----------------
//Lista de Clientes Antigos
app.get('/listaClientesAntigos', async (req, res) => {
    await cliente.findAll({
        order: [['nascimento', 'DESC']]
    }).then(function (clientes) {
        res.json({ clientes })
    });
});

//-------------------Total-Clientes-------------------
app.get('/totalclientes', async (req, res) => {
    await cliente.count('id').then(function (clientes) {
        res.json(clientes);
    });
});

//Total Pedidos
app.get('/listapedidos', async (req, res) => {
    await pedido.findAll({
        raw: true
    }).then((pedido) => {
        res.json({
            pedido
        })
    });
});

//-------------------Pedidos-Crescente-------------------
app.get('/listaPedidosCrescente', async (req, res) => {
    await pedido.findAll({
        order: [['id', 'ASC']]
    }).then((pedido) => {
        res.json({
            pedido
        })
    });
});

//Total Pedidos por ID
app.get('/totalpedidos', async (req, res) => {
    await pedido.count('id').then((pedido) => {
        res.json(pedido)
    });
});

//'servicos' é o retorno do valor da contagem de servico que tem /criação de uma nova rota
//--------------------Lista-Qtd-Serviços--------------------
app.get('/totalservicos', async (req, res) => { // count - conta qts id tem no serviço
    await servico.count('id').then(function (servicos) {// guarda dentro de serviços a informação da qtd.
        res.json(servicos);
    });
});

//await User.sum('valor', { where: { ClienteId: { [Op.gt]: 5 } } }); // 50
// usar req.params.id dentro de [op.gt]
//Lista por Serviço ID
app.get('/servico/:id', async (req, res) => { // 1 serviço por vez 
    await servico.findByPk(req.params.id) // Find by Primary Key / solicitando (requisição) ao servidor de parametro do ID = numero que o usuario colocou
        .then(servico => {
            return res.json({
                error: false, // nao teve erro
                servico // retorna pro usuario
            });
        }).catch(function (error) {
            return res.status(400).json({// mostrar a resposta // status mostra o erro (certo 200, erro 400)
                error: true, // erro de conexao / nome/ tabela nao existe
                message: "Código não esta cadastrado!"
            });
        }); // caso nao de certo acima
}) // retorna o servico com base no id que vou colocar

//------------------Desafio-03----------
//Total Gasto por Cliente
app.get('/pedido/:id', async (req, res) => {
    await pedido.sum('valor', {
        where: { ClienteId: req.params.id }
    }).then((pedido) => {
        return res.json({
            pedido
        })
    });
});

//Total de pedido gasto por cliente
app.get('/pedidoop/:id', async (req, res) => {
    await pedido.sum('valor', {
        where: { ClienteId: { [Op.eq]: req.params.id } }
    }).then((pedido) => {
        return res.json({ pedido })
    });
});

app.get('/qtpedidos', async (req, res) => {
    await pedido.count('id')
        .then(function (pedidos) {
            res.json(pedidos);
        });
});

// ---------------- Atualizar servidor por ID - GET --------------------
app.get('/atualizaservico/:id', async (req, res) => {
    await servico.findByPk(req.params.id)//precisa de consulta para alteração, no caso por uma pk
        .then(servico => { // then > se encontrei
            servico.nome = 'HTML/CSS/JS'; // fazer alteração! obj.nome
            servico.descricao = 'Páginas estáticas e dinâmicas estilizadas';
            servico.save(); // salvar mudança obj.save();
            return res.json({ servico }); // objeto entre {}
            //'return' retorna a função, no caso de servico
        });
});

// --------------- Atualizar servidor por ID - PUT --------------------
app.put('/editarservico', (req, res) => {
    servico.update(req.body, {
        where: { id: req.body.id }
    }).then(function () {
        return res.json({
            error: false,
            message: "Serviço foi alterado com sucesso."
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Erro na alteração do serviço."
        });
    });
});

//Listar todos os serviços por id os dados atrelado a ele
app.get('/servicopedidos/:id', async (req, res) => {
    await servico.findByPk(req.params.id, {
        include: [{ all: true }]
    }).then(servico => {
        return res.json({ servico });
    });
});

//----------------------ALTERAÇÃO/ATUALIZAR----------------------
app.put('/editarpedido', (req, res) => { // alteração com base no servico
    pedido.update(req.body, {
        where: { ServicoId: req.body.ServicoId }
    }).then(function () {
        return res.json({
            error: false,
            message: "Pedido atualizado com sucesso!"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível modificar o pedido."
        }); // 400 erro / 200 certo
    });
});
//------------------Exercicio-01------------------
//Busca Cliente
app.get('/buscapedidoporcliente', async (req, res) => {
    await pedido.findAll({
        where: {
            ClienteId: req.body.ClienteId
        }
    }).then((pedido) => {
        return res.json({ pedido })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao atualizar"
        })
    })
});

//-------------------Exercicio-02-------------------
//Consulta Cliente
app.get('/cliente/:id', async (req, res) => {
    await cliente.findByPk(req.params.id).then((cliente) => {
        return res.json({ cliente });
    });
});

//--------------------Pegar-Cliente--------------------
app.put('/editarcliente', (req, res) => {
    cliente.update(req.body, {
        where: {
            Id: req.body.id
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Cliente Atualizado"
        })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao atualizar"
        })
    })
});

//---------------------Exercicio 03--------------------

app.put('/atualizarpedido', (req, res) => {
    pedido.update(req.body, {
        where: {
            Id: req.body.id
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Pedido Atualizado"
        })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao atualizar"
        })
    })
});

//-----------------------DELETE-----------------------  
app.get('/excluircliente', async (req, res) => {
    cliente.destroy({
        where: { id: 30 } // id do cliente a ser removido
    });
});
// /\ Usa GET normal no postman para executar a exclusão
// --------2º Forma \/ necessita usar DELETE no POSTMAN!--------

app.delete('/apagarcliente/:id', (req, res) => {
    cliente.destroy({
        where: { id: req.params.id }//id bater com os do objt
    }).then(function () {
        return res.json({
            error: false,
            message: "Cliente foi excluído com sucesso!"
        });
    }).catch(function (erro) {
        return res.status(400).json({
            error: true,
            message: "Não foi possível excluir o cliente"
        });
    });
});
//--------------------Desafio-Aula-04--------------------
//Faça uma rota que liste todos os pedidos de um cliente

app.get('/pedidoporclienteid/:id', async (req, res) => {
    await pedido.findAll({
        include: [{ all: true }]
    },
        {
            where: {
                ClienteId: req.params.id
            }
        }).then((pedido) => {
            return res.json({ pedido })
        }).catch((erro) => {
            return res.status(400).json({
                error: true,
                message: "Erro ao atualizar"
            });
        });
});

// Crie uma nova rota que permite alterar esses pedido utilizando o ClienteId
app.put('/editarpedidoporcliente', (req, res) => {
    pedido.update(req.body, {
        where: {
            ClienteId: req.body.ClienteId
        }
    }).then(() => {
        return res.json({
            error: false,
            message: "Pedido Atualizado"
        })
    }).catch((erro) => {
        return res.status(400).json({
            error: true,
            message: "Erro ao atualizar"
        });
    });
})

let port = process.env.PORT || 3001;

app.listen(port, (req, res) => {
    console.log('Servidor ativo');
}); //<-- "listen" fica esperando uma (requisição, resposta)