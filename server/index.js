
require('dotenv').config()//create private variables that u dont want to share on a website like github
//create server
const express = require('express');
const cors=require('cors');  
const bodyParser=require('body-parser');

const handle=require('./handlers') //start listing at /
const app=express();
//const port= process.env.PORT; //it will take the PORT variable from .env
const port= 5000;
app.use(cors());//initialise the middle wares that we installed
app.use(bodyParser.json());//initialise the middle wares body-parser that we installed

app.get('/',(req,res)=>res.json ({hello :'worlds'}));//json object //start listing at /
app.use(handle.notFound); //not found is coming from handler/index.js

//its the final end point where the server lands before app crashes
app.use( handle.errors); //this errorHandler errors is coming from handler/index.js

app.listen(port, console.log(`server is listining to ${port}`)); //``backtick for template literals