const mongoose=require('mongoose');
//import User  from './user';
//import Message1 from './message';

mongoose.set('debug',true);
mongoose.Promise=global.Promise;
const mongo_url='mongodb://localhost:27017/vote'
mongoose.connect(mongo_url);


module.exports.User=require('./user'); //allow us to use db variable in our application i.e in server/index.js as db.Polls or db.User
//importing from models/user.js and export it to anywhere
module.exports.Poll=require('./poll');