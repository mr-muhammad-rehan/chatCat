'use strict';

const h = require('../helpers');
const passport = require('passport');

module.exports = () =>{
    let routes = {
        'get':{
            '/':(req, res, next) =>{
                res.render('login');
            },           
            '/chat': (req, res, next) =>{
                res.render('chatroom');
            },
            '/rooms': (req, res, next) =>{
                res.render('rooms');
            },
            '/auth/facebook': passport.authenticate('facebook'),
            '/auth/facebook/callback': passport.authenticate('facebook',{
                'sucessRedirect': '/rooms',
                'failureRedirect':'/'
            })
        },
        'post':{

        },
        'NA': (req, res, next)=>{
            res.status(404).sendFile(process.cwd() + '/views/404.htm');
        }
    }
 
    return h.route(routes);
}
 

