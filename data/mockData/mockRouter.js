const express = require('express');
const router = express.Router();
const mockModel = require('./mockDb')

router.get('/', (req, res) => {
    mockModel
        .get()
        .then(mock => {
            res.json(mock)
        })
        .catch(error =>
            res.status(500).json(error))
});