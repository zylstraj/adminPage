'use strict';
let models = require('../models/user');

module.exports = (router) => {
  router.post('/login', (req, res) => {
    let authorizationArray = req.headers.authorization.split(' ');
    let method = authorizationArray[0];
    let base64en = authorizationArray[1];
    let authArray = new Buffer(base64en, 'base64').toString().split(':');
    let username = authArray[0];
    let password = authArray[1];
    console.log(method);
    console.log(name);
    console.log(password);
    User.findOne({'username': username}, (err, user) => {
      if (err) console.log(err);
      let valid = user.compareHash(password);
      if (!valid) {
        return res.json({status: 'failure'});
      }
      res.status(200).json({token: user.generateToken()});
    });
  });
};
