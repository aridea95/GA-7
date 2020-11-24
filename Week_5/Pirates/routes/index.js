const { Router } = require('express');
const router = Router();
const ShipRoutes = require('./ship');
const PirateRoutes = require('./pirate');

router.get('/', (req,res)=>{
    res.send('This page for HOMEPAGE')
});

router.get('/ships', ShipRoutes);

router.get('/pirates', PirateRoutes);

module.exports = router;
