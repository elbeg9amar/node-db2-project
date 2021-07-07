const express = require('express');
const router = express.Router();

const db = require('../data/dbConfig');

const {validataCarId,
        validateNewCar} = require('./carVal')


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

router.get('/:id',validataCarId, (req,res) => {
    db('cars').where('id','=',req.params.id)
    .then(car => {
        res.status(200).json(car)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error:'error occured while getting data by id'})
    });
});

router.post('/', validateNewCar, (req,res) => {
    db('cars').insert(req.body, 'id')
    .then(ids => {
        res.status(200).json({data: ids})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'error occrured while posting new car'})
    });
});

router.delete('/:id',validataCarId, (req,res) => {
    db('cars').where({id: req.params.id}).delete()
    .then(count => {
        res.status(200).json(count)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: "error occured while deleting data"})
    });
});

router.put('/:id',validataCarId, (req,res) => {
    const changes= req.body;
    db('cars').where({id:req.params.id}).update(changes)
    .then(count => {
        res.status(200).json({data: count})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error:'error occured while updating the data'})
    });
});



module.exports = router;

