const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
    res.status(200).send({
        title: 'Reprograma N3 Backend - Projeto Prático 1.0',  
        version: '0.0.1'
        
    })
})

module.exports = router;