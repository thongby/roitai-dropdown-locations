const mongoose = require('mongoose');

const tambonSchema = new mongoose.Schema({
    ta_id:{
        type: String
    },
    tambon_t:{
        type: String
    },
    tambon_e: {
        type: String
    },
    am_id: {
        type: String
    },
    ch_id: {
        type: String
    },
    lat: {
        type: Number
    },
    long: {
        type: Number
    }
});

module.exports = Tambon = mongoose.model('tambons', tambonSchema);