const { Router } = require('express');
const router = Router();
const BookRouter = require('./book');
 
router.get('/', (req,res) => {
    res.send("BOOKSTORE");
    //res.render('index.ejs');
})

router.use('/book', BookRouter);

module.exports = router;
