var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  console.log("Home page accessed");
  res.send("welcome to the Home page");
});

router.get('/users', (req, res, next) => {
  console.log("Users page");
  res.send('respond with a sdf');
});

module.exports = router;
