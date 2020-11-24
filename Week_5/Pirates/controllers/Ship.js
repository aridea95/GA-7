const { Ship } = require('../models/ships')

class ShipController {
    static getShip(req, res) {
        Ship.findAll()
        .then(result => {
            console.log(result);
            res.send(result)
        })
        .catch(err => {
            console.log(err);
        })
    }
    static addFormShip(req, res) {
        res.render('addShip.ejs'); //I'm not sure
    }

    static addShip(req, res) {
        const {name, status, haki } = req.body;
        Pirate.create({
            name,
            type,
            power
        })
        .then(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
    }
    static findById(req, res) {
        const id = req.params.id;
        Student.findOne({
            where: { id }
        })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }
    static deleteShip(req, res) {
        const id = req.params.id;
        Ship.destroy({
            where: { id }
        })
            .then(() => {
                res.send("Deleted")
                // res.redirect('/ships')
            })
            .catch(err => {
                res.send(err)
            })
    }

}


module.exports = ShipController;