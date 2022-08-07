const Changwat = require('../models/locations/changwat');
const Amphoe = require('../models/locations/amphoe');
const Tambon = require('../models/locations/tambon');

// Location data ------------------------------------
// List all changwat data
exports.listChangwat = async (req, res) => {
    try {
        const dataChangwat = await Changwat.find({})
        res.send(dataChangwat)
        //res.send('OK')
    } catch (error) {
        console.log(error)
        res.status(400).send('Server Error!!!')
    }
}

// List all amphoe data
exports.listAmphoe = async (req, res) => {
    try {
        const id = req.params.id
        const dataAmphoe = await Amphoe.find({ch_id:id})
        res.json(dataAmphoe)
        //res.send('OK')
    } catch (error) {
        console.log(error)
        res.status(400).send('Server Error!!!')
    }
}

// List all tambon data
exports.listTambon = async (req, res) => {
    try {
        const id = req.params.id
        const dataTambon = await Tambon.find({am_id:id})
        res.json(dataTambon)
        //res.send('OK')
    } catch (error) {
        console.log(error)
        res.status(400).send('Server Error!!!')
    }
}
//-----------------------------------------------