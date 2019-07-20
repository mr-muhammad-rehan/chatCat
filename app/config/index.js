'user strict'

if(process.env.NODE_ENV === 'production'){
    module.exports ={
        host: process.env.host || '',
        dbURI: process.env.dbURI,
        sessionSecret: process.env.sessionSecret,
        db:{
            clientID: process.env.fbClientID,
            clientSecret: process.env.fbClientSecret,
            callbackURL: process.env.host+'/auth/facebook/callback',
            profileFields: ['id', 'displayName', 'photos']
        }
    }
}else{
    //Development Stage
    module.exports= require('./developement.json');
}