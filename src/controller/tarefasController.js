const tarefas = require('../model/tarefas.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id

    if (id > 4 || id <= 0) {
        res.redirect(301)
    }
    res.status(200).send(tarefas.find(tarefa => tarefa.id == id))
}
   

exports.getConcluido = (req, res) => {
    const concluido = tarefas.filter(item => item.concluido == "true")
    res.status(200).send(concluido)
}

exports.getTarefasByColaborador = (req, res) => {
    const nome = req.params.nome
    res.status(200).send(tarefas.find(tarefa => tarefa.colaborador == nome))
}

function transformarInclusaoEmDate(inicio) {
       const splitData = inicio.split("/");
       const inicial = new Date(splitData[2], splitData[1] - 1, splitData[0])
        return inicial;
      }

exports.getData = (req, res) => {
    tarefas.forEach(item => item.dataInclusao = transformarInclusaoEmDate(item.dataInclusao))
    tarefas.sort((a, b) => {
            return (a.dataInclusao > b.dataInclusao) ? 1 : (a.dataInclusao < b.dataInclusao) ? -1 : 0
    });
    
        res.status(200).send(tarefas);
    };

// function transformarConclusaoEmDate(fim){
//     const splitSegundaData = fim.split("/");
//     const conclusao = new Date(splitSegundaData[2], splitSegundaData[1] - 1, splitSegundaData[0])
//     return conclusao;
// }

// function descobrirTempoTotalDeConclusao(conclusao, inclusao){
//     const diasEmMilissegundos = 86400000;
//     return ((conclusao - inclusao) / diasEmMilissegundos).toFixed(0);
// };
    
// exports.getDays = (req, res) => {
//     tarefas.forEach(item => item.dataInclusao = transformarInclusaoEmDate(item.dataInclusao))
//     tarefas.forEach(item => item.dataConclusao = transformarConclusaoEmDate(item.dataConclusao))
//     tarefas.forEach(item => item.diasTotais = descobrirTempoTotalDeConclusao(item.dataConclusao, item.dataInclusao));

//        res.status(200).send(tarefas);
// };
