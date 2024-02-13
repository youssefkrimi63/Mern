// import the mongoose lib to build the schema
const mongoose = require("mongoose");


// the model - the rules  the entries need to follow

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must have at least 3 chars"]
    },
    price: {
         type: Number,
         required: [true, "please provide a price"],
         
     },
    description: {
        type: String
    },
   
}, { timestamps: true })

const Product = mongoose.model("Product", ProductSchema)
module.exports = Product