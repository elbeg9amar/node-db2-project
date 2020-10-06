const db = require('../data/dbConfig');

module.exports = {
    validataCarId,
    validateNewCar
}

function validataCarId(req,res,next) {
    const id = Number(req.params.id)
    db.select('*').from('cars')
        .then(datas => {
            if(datas.find(data => data.id === id)){
                next()
            }else {
                res.status(404).json({message: "invalid car id"})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: "error occured while validating action's id"})
        });
};

function validateNewCar(req,res,next) {
    const body =req.body;
    console.log(body)
    if(Object.keys(body).length === 0){
        res.status(400).json({message: "missing car data"})
    }else if (!body.VIN || !body.make || !body.model|| !body.mileage){
        res.status(400).json({error:"required fields are missing"})
    }else {
        next()
    };
};