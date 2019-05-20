const mongoose=require('mongoose');
 //schema is just a structure of how our datastructure will look like
const bcrypt=require('bcryptjs');

 const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    created:{
        type:Date,
        default:Date.now,
    },
    polls:[{type:mongoose.Schema.Types.ObjectId,ref:'Poll'}] //reference to polls
});



//INSTALL BCRYPT
//>npm install bcryptjs
//add bcrpyjs here
//const bcrypt=require('bcryptjs');



//this will take effect before save so that we can encrypt our password before saving into database
//here this dont works properly therefore we use function keyword
//and all async await function we need to keep in try catch
userSchema.pre('save', async function (next){
try{
    //if the password is no modified //if we are sending in correct password we r gonna check its correct or not
    //and in the case if nothing is changed in the database of psswd we just sen dit to he next function
if(!this.isModified('password')){
    return (next);
}
//otherwise we gonna hash the password and the 10 used below is just the strength of the hashing
const hashed = await bcrypt.hash(this.password,10);
this.password=hashed; //the hashed will be stored into the actual schema object as the password
}catch(err){
    return next(err);
}
});


//we also need a way to check if the password are all the same
//so we gonna use anthore method comparePassword that is also an async function
//and like above we gonna put async into try catch block
//so that any error that occur will be send to the errorhandler
//then in try block we actually need to compare the new attempt bcrypted password to actual bcrypted password stored in database
userSchema.methods.comparePassword = async function (attempt,next){
    try{
        return await bcrypt.compare(attempt,this.password);//this will return a boolean
    }catch(err){
        next(err);
    }
}
module.exports=mongoose.model('User',userSchema)//allow us mongoose to keep track of the user




