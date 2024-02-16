const producteController = require("../controllers/movie.controller")


module.exports = app => {
    app.get("/api/products", producteController.findAllProduct)
    app.get("/api/products/:id", producteController.findOneProduct)
   
    app.post("/api/products", producteController.createNewProduct)
   
}