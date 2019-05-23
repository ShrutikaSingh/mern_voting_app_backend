const router=require('express').Router();//importing the methog Router of express

//inside handlers create auth.js
//import correct handlers and add them to these routes
//and then gp to handlers/index.js and esport them the their #002
const handle=require('../handlers'); //.. takes us to upone level i.e to server folder and then to the handlers folder #001



//the two routes that we are gonna have is register and login
router.post('/register',handle.register);
router.post('/login',handle.login);

module.exports=router;
