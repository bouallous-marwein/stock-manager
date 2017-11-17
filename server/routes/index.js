var express = require('express');
var router = express.Router();
var User = require('../models/user');


/* GET home page. */
router.get('/', function(req, res, next) {
    let data = {
        username: 'marwein',
        firstName: 'Marwein',
        lastName: 'Bouallous',
        email: 'marwein@bouallous.fr',
        password: '1234567890'
    }

    console.log(data);
    let user = new User(data);
    user.save();

    res.sendFile('index.html');
});

module.exports = router;