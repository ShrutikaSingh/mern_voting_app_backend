
require('dotenv').config()//create private variables that u dont want to share on a website like github
//create server

const express = require('express');
const port= 3000;   //const port= process.env.PORT; //it will take the PORT variable from .env

const cors=require('cors');  
const bodyParser=require('body-parser');

const db=require('./models/mongo_index.js');    //for mongo db connection
const handle=require('./handlers');  //start listing at /

const routes=require('./routes');
const app=express();

app.use(cors());    //initialise the middle wares that we installed
app.use(bodyParser.json()); //initialise the middle wares body-parser that we installed

app.get('/',(req,res)=>res.json ({hello :'worlds'}));//json object //start listing at /
app.use('./api/auth',routes.auth);//sending all the route for this endpoint here and routes.auth will take care of all the auth
//here mkdir routes
//touch routes/index.js & touch routes/auth.js



app.use(handle.notFound);   //not found is coming from handler/index.js
app.use( handle.errors);    //this errorHandler errors is coming from handler/index.js//const port= process.env.PORT; //it will take the PORT variable from .env

app.listen(port, console.log(`server is listining to ${port}`)); //``backtick for template literals