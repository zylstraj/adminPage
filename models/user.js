'use strict';

let mongoose = require('mongoose');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

let userSchema = new mongoose.Schema({
  username: String,
  password: String
});

userSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10));
  next();
});

userSchema.methods.compareHash = function(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.methods.generateToken = function() {
  return jwt.sign({_id: this._id}, 'CHANGE ME')
};

let User = mongoose.model('User', userSchema);
module.exports = User;
