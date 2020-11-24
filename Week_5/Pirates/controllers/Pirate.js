const { Pirate } = require('../models/pirates');

class PirateController {
    static getPirate(req, res) {
        Pirate.findAll()
        .then(result => {
            console.log(result);
            res.send(result);
        })
        .catch(err => {
            console.log(err);
        })
    }
    static addFormPirate(req, res) {
        res.render('addPirate.ejs'); //I'm not sure
    }

    static addPirate(req, res) {
        const {name, status, haki } = req.body;
        Pirate.create({
            name,
            status,
            haki
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
    static deletePirate(req, res) {
        const id = req.params.id;
        Pirate.destroy({
            where: { id }
        })
            .then(() => {
                res.send("Deleted")
                // res.redirect('/pirates')
            })
            .catch(err => {
                res.send(err)
            })
    }

}


module.exports = PirateController;