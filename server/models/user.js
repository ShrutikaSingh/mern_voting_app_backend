const mongoose=require('mongoose');
 //schema is just a structure of how our datastructure will look like

 const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model('User',userSchema)//allow us mongoose to keep track of the user


