const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// this allows us to create the schema file for mongodb
const UserSchema = new mongoose.Schema({
  firstName: {
    type:String,
    default: ''
  }, 
  lastName: {
    type:String,
    default: ''
  }, 
  email: {
    type:String,
    default: ''
  }, 
  password: {
    type:String,
    default: ''
  }, 
  isDeleted: {
    type:Boolean,
    default: false
  }
});
// This part of the code allows us to hash the user's password and this is only possiable since we are using bcrypt
UserSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}
// This allows us to verify the password by hashing the user's input for password and if the users input is correct that means their hashed input matches their hashed password.

UserSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password,this.password);
}
module.exports = mongoose.model('User', UserSchema);
