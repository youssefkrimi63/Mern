// the controller does the CRUD for the DB
// import the model here
const Movie = require("../models/product.model")






// CREATE 
module.exports.createNewProduct = (req, res) => {
    Movie.create(req.body)
        .then((oneProduct) => {
            console.log(">>> Movie.create()= >>>", oneProduct)
            res.status(200).json(oneProduct)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

