const express = require('express');
const router = express.Router();

const controllerTarefas = require('../controller/tarefasController');

router.get('/', controllerTarefas.get);
router.get('/concluidos/filtrar', controllerTarefas.getConcluido);
router.get('/datas', controllerTarefas.getData);
// router.get('/tempo', controllerTarefas.getDays);
router.get('/:nome/buscar', controllerTarefas.getTarefasByColaborador);
router.get('/:id', controllerTarefas.getById);




module.exports = router;