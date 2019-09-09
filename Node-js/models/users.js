const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 
 
var Users = mongoose.model('Users', {

   
   fullname: {type: String},
   email: {type: String},
   password: {type: String},
   saltSecret: {type: String}


},'user') ;




module.exports = { Users };