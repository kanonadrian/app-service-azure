'use strict';
const express = require('express');
const productsController = express.Router();
const { poolPromise } = require('../connection')

productsController.get('/list-products/', async(req, res) => {

    try {
        const pool = await poolPromise
        const result = await pool.request()
            .query('select top 10 Id_Familia, Id_Unidad, Id_Grupo from PRODUCTOS');      
    
        res.json(result.recordset)

    } catch (err) {

        res.status(500)
        res.send(err.message)

    }

});

module.exports = productsController;