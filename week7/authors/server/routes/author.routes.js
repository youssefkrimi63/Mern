const authorController= require('../controllers/author.controller');

module.exports = (app)=>{
    app.get('/api/authors',authorController.getAllAuthors);
    app.get('/api/authors/:id',authorController.getOneAuthor);
    app.post('/api/authors',authorController.createAuthor);
    app.delete('/api/authors/:id',authorController.deleteAuthor);
    app.patch('/api/authors/:id/update',authorController.updateAuthor);
};