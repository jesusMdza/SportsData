var express = require('express');
var router = express.Router();

router.get('/users', (req, res, next) => {
  console.log("you have navigated to 'users'");
  res.send('respond with a sdf');
});

module.exports = router;
