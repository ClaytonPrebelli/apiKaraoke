const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;


//retorna todos os colaboradores
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) };
        conn.query(
            'SELECT * FROM musicas',
            (error, resultado, field) => {
                if (error) { return res.status(500).send({ error: error }) };
                return res.status(200).send(resultado)
            }
        )
    })

});


module.exports = router;

