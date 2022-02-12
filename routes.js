var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/data', (req, res, next) => {
  res.send('GETTING DATA FROM SPORTSDATAIO');

  let sportsData;

  const exResponse = axios({
    method: 'get',
    url: 'https://api.sportsdata.io/v3/nfl/odds/json/BettingMetadata',
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": key
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
