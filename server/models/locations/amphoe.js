const mongoose = require('mongoose');

const amphoeSchema = new mongoose.Schema({
    am_id:{
        type: String
    },
    amphoe_t:{
        type: String
    },
    amphoe_e: {
        type: String
    },
    ch_id: {
        type: String
    }
});

module.exports = Amphoe = mongoose.model('amphoes', amphoeSchema);