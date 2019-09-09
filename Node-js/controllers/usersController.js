const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Users } = require('../models/users');


// router.post('/register',(req,res) => {
 
//   var user = 


// });

router.get('/', (req,res) => {

    Users.find((err, docs) => {
        if(!err)
        {res.send(docs);} 
       
        else {   console.log('Error in Connection : ' + JSON.stringify(err , undefined, 2));
    }
    });
    

});


router.post('/' ,(req,res) => {

    var user = new Users({

        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        

    });
    user.save((err,docs) => {
        if(!err)
          res.send(doc);
         else
         console.log('error in saveing data '); 
    });
});



module.exports = router;