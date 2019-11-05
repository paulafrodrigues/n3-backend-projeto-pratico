const tarefas = require('../model/tarefas.json')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id

    if (id > 4 || id <= 0) {
        res.redirect(401, "https://httpstatusdogs.com/400-bad-request")
    }
    res.status(200).send(tarefas.find(tarefa => tarefa.id == id))
}
   

exports.getConcluido = (req, res) => {
    const concluido = tarefas.filter(item => item.concluido == "true")
    res.status(200).send(concluido)
}

exports.getTarefasByColaborador = (req, res) => {
    const nome = req.params.nome
    res.status(200).send(tarefas.filter(tarefa => tarefa.colaborador == nome))
    
}


function transformarInclusaoEmDate(dataInclusao) {
       const dividirData = dataInclusao.split("/");
       const dataDividida = new Date(dividirData[2], dividirData[1] - 1, dividirData[0]);
       const dataEmMilissegundos = dataDividida.getTime();
       const dataCerta = Math.ceil(dataEmMilissegundos/(1000*60*60*24))
       return dataCerta

        
      }

exports.getData = (req, res) => {
    tarefas.forEach(item => item.dataInclusao = transformarInclusaoEmDate(item.dataInclusao))
    tarefas.sort((data1, data2) => {
        return (data1.dataInclusao > data2.dataInclusao) ? 1 : (data1.dataInclusao < data2.dataInclusao) ? -1 : 0
});
           res.status(200).send(tarefas);
    };
