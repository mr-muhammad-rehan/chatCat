'use strict'
const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

//Log Mongos Errors 
Mongoose.connection.on('error', error=>{
    console.log('Mongo Error:', error);
});

//Create Schema for Mongo DB (Define Structure of Collection)
const chatUser = new Mongoose.Schema({
        profileId:          String,
        fullName:           String,
        profilePic:         String
});

//Use the Schema 
let userModel = Mongoose.model('chatUser', chatUser);   

module.exports ={
    Mongoose,
    userModel  
}