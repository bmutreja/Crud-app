const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/crudDB', (err) => {
  if(!err)
       console.log('Connection Successfully');

  else
  console.log('Error in Connection : ' + JSON.stringify(err , undefined, 2));
     
});


module.exports = mongoose;