const { Router } = require('express');
const BookRoutes = Router();

BookRoutes.get('/', (req,res) => {
    // res.send("Book Home")
    res.render('book.ejs')
})

BookRoutes.get('/tambah', (req,res) => {
    res.send("Books add")
})

module.exports = BookRoutes;
