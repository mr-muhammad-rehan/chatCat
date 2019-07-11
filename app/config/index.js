'user strict'

if(process.env.NODE_ENV === 'production'){
    module.exports ={
        host: process.env.host || '',
        dbURI: process.env.dbURI,
        sessionSecret: process.env.sessionSecret,
    }
}else{
    //Development Stage
    module.exports= require('./developement.json');
}