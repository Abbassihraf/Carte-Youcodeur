const expressJWT = require('express-jwt');

exports.requireSignIn = expressJWT({
    secret: "aqwedgfg342sfddsgwgfg5",
    algorithms: ["HS256"],
    userProperty: 'auth'
})