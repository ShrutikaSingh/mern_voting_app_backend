
//create server
const express = require('express');

//import error handler
const handle=require('./handlers')



const app=express();
const port= 4000; //any no. above 1000,below 1000 is used by our computers

//start listing at /
app.get('/',(req,res)=>res.json ({hello :'worlds'}));//json object



app.use(handle.notFound); //not found is coming from handler/index.js

//its the final end point where the server lands before app crashes
app.use( handle.errors); //this errorHandler errors is coming from handler/index.js

app.listen(port, console.log(`server is listining to ${port}`)); //``backtick for template literals