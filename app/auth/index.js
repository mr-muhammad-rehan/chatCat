'use strict';

const passport = require('passport');
const config = require('../config');
const FacebookStrategy = require('passport-facebook').Strategy;
const h = require('../helpers');


module.exports = () =>{
  
    passport.serializeUser((user, done) =>{
        done(null, user.id);
     });

    passport.deserializeUser((id, done)=>{
        //Find the user in db by id
        h.findById(id)
            .then(user=> done(null, user))
            .catch(error=> console.log('Error when deserialize User'));
    });
        //Find user in the local db, using prfile id
        //if fthe user is found, return the user data using don()
        //if the user is not fount, create one in the local db and return         
    let authProcessor=  (accessToken, refreshToken, profile, done ) => {
        h.findOne(profile.id)
            .then(result =>{
                if(result){
                    done(null, result);
                }else{
                    //create new user and return 
                    h.createNewuser(profile)
                            .then(newChatUser => done(null, newChatUser))
                            .catch(error => console.log('Error when creating new user'));
                }
            });

    }


    passport.use(new FacebookStrategy
                    (   config.fb,                      
                        authProcessor
                    ));
}