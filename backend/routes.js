var express = require('express');
var router = express.Router();
const axios = require('axios');

// SPORTS DATA

router.get('/sports-data/data', (req, res, next) => {
  res.send('GETTING DATA FROM SPORTSDATAIO');

  axios({
    method: 'get',
    url: 'https://api.sportsdata.io/v3/nfl/odds/json/BettingMetadata',
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": process.env.SPORTSDATA_API_KEY
    },
  })
  .then(response => {
    console.log(`statusCode: ${response.status}`);
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  })
});

// SHARP SPORTS

router.get('/sharp-sports/books', (req, res, next) => {
  res.send('SHARP SPORTS BOOKS');

  axios({
    method: 'get',
    url: 'https://api.sportsdata.io/v3/nfl/odds/json/BettingMetadata',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${process.env.SHARPSPORTS_API_KEY}`
    },
  })
  .then(response => {
    console.log(`statusCode: ${response.status}`);
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  })
});

module.exports = router;
