const mongoose = require('mongoose');
// this creates a new schema file for the users session login info such as 
//if they are signed in right now or not, as well as seeing what time they created that first session
const UserSessionSchema = new mongoose.Schema({
 userId: {
     type: String,
     default: ''
 },
 timestamp:{
     type:Date,
     default:Date.now()
 },
 isDeleted: {
     type: Boolean,
     default: false
 }
});
// exports this schema file
module.exports = mongoose.model('UserSession', UserSessionSchema);
