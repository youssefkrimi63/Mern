const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:[true,"{PATH} is required ."],
        minLength:[3,"{PATH} should be at least 3 characters . "]
    }
},{timestamps:true});

const Authors = mongoose.model("Authors",AuthorSchema);
module.exports= Authors;