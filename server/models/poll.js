const mongoose = require ('mongoose');

const pollSchema = new mongoose.Schema({
    poll:{
        type:String,

    },
});

module.exports = mongoose.model('Poll', pollSchema);