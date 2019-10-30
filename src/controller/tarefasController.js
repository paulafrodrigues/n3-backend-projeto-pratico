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