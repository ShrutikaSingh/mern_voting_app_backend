const mongoose = require ('mongoose');


const optionSchema = new mongoose.Schema({
    options:String,
    votes:{
        type:Number,
        default:0,
    },
});

const pollSchema = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    questions:String,
    options:[optionSchema], //to refer optionSchema above
    voted:[{type: mongoose.Schema.Types.ObjectId,ref:'User'}],
    created:{
        type:Date,
        default:Date.now,
    },
});

module.exports = mongoose.model('Poll', pollSchema);
