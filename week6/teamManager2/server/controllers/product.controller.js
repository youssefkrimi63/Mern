// the controller does the CRUD for the DB
// import the model here
const product = require("../models/product.model")



// READ ALL
module.exports.findAllProduct = (req, res) => {
    product.find()
        .then((allProduct) => {
            console.log(">>> product.find()  >>>", allProduct)
            res.json(allProduct)
        })
        .catch((err) => {
            res.json(err)
        })
}

// READ ONE 
module.exports.findOneProduct = (req, res) => {
    product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.json(oneSingleProduct)
        })
        .catch(err => {
            res.json(err)
        })
}


// CREATE 
module.exports.createNewProduct = (req, res) => {
    product.create(req.body)
        .then(( oneProduct) => {
            console.log(">>> product.create()= >>>",  oneProduct)
            res.status(200).json( oneProduct)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

