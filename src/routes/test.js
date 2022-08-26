var router = require('express').Router()

router.post('/', function(req, res, next) {
    const {name} = req.body;
    res.send(`Welcome ${name}`);
})

module.exports = router