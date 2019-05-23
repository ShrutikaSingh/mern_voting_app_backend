const db = require('../models');//before anything we will be needing our database
//so we are using our db that will be asynchronous

//we use diirectly exports instead of module.exports cauz in our handlers/index.js we are actually spreading it out using ...
//so auth.js will be exports  and handlers/index.js will be module.exports
exports.register = async(req,res,next) =>{ //async db , async always uses try catch //this way we will not need to do promises and callbacks
try{
 const user= await db.User.create(req.body);//we need to create user i register since currently our database has no users & we r gonna create user using based on the body of request
  
 res.json(user);//now just send it back to the user this goona include the psswd //not to used during production
}
catch(err){
    next(err);
}

};

exports.login= async (req,res,next) => {
    try{

    }catch(err){
        next(err);
    }
};
