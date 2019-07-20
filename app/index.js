'use strict';

//Social Authenticatation Login
require('./auth')();

module.exports = {
    router: require('./routes')(),
    session: require('./session'),
}
 