const mongoose = require('mongoose');

const changwatSchema = new mongoose.Schema({
    chw_id:{
        type: String
    },
    changwat_t:{
        type: String
    },
    changwat_e: {
        type: String
    },
    khet: {
        type: String
    },
    region_t: {
        type: String
    },
    region_e: {
        type: String
    }
});

module.exports = Changwat = mongoose.model('changwats', changwatSchema);