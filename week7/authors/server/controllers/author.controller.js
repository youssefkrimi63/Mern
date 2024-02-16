const Authors = require('../models/author');

//Create an author
module.exports.createAuthor=(req,res)=>{
    Authors.create(req.body)
    .then(newAuthor=>res.json(newAuthor))
    .catch(err=>res.status(400).json(err));
};

//Get all authors
module.exports.getAllAuthors=(req,res)=>{
    Authors.find()
    .then(allAuthors=>res.json(allAuthors))
    .catch(err=>res.status(404).json(err));
};

//Get one author
module.exports.getOneAuthor=(req,res)=>{
    Authors.findById({_id:req.params.id})
    .then(oneAuthor=>res.json(oneAuthor))
    .catch(err=>res.status(404).json(err));
};

//Delete an author
module.exports.deleteAuthor=(req,res)=>{
    Authors.deleteOne({_id:req.params.id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err));
};

//Update author
module.exports.updateAuthor=(req,res)=>{
    Authors.updateOne({_id:req.params.id},req.body,{new:true,runValidators:true})
    .then(oneAuthor=>res.json(oneAuthor))
    .catch(err=>res.status(400).json(err));
};