const mongoose = require('mongoose');
const express = require('express');

const mongooseConnection = require('./db');
const constValues = require('./constants');

const routes = require('./route/route');
const { route } = require('./route/route');

// const dataSchema =  require('./models/data.model');
const app = express();

app.use('/', routes);

app.all("*", (req, res)=>{
    res.send("Invalid Request. Please contact Administrator.");
})


const initializeServer = async ()=>{
    await mongooseConnection.mongooseConnection();
    app.listen(constValues.PORT, (error)=>{
        console.log("Server Listening to Port " + constValues.PORT);
        if(error){
            console.log("Error Starting Application Server");
        }
    })
}

initializeServer();
