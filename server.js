const express = require('express');
const app = express();
const request = require('request');

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', '*');

    next();
}

app.use(allowCrossDomain);


app.get('/api/recipes', function(req, res) {

  let q = req.query.q || 'steak';

  request('http://www.recipepuppy.com/api/?q=' + q, function (error, response, body) {
    res.send(JSON.parse(body));
  });


});

const PORT = process.env.PORT || 5001;

app.listen(PORT, function() {
  console.log('Listening on port', PORT);
});
