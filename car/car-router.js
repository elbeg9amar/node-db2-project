const express = require('express');
const router = express.Router();

const db = require('../data/dbConfig');

router.get('/', (req,res) => {
    db.select('*').from('cars')
    .then(cars => {
        res.status(200).json({datas: cars})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'error occured while getting cars data'})
    });
});

module.exports = router;