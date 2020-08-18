var express = require('express');
var App = express();
var path = require('path');
var cors = require('cors');

App.get('/property/:listingId', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});
App.get('/propertyScores/:listingId', (req, res) => {
  res.redirect(`http://localhost:1215${req.url}`);
});

App.get('/propertyReviews/:listingId', (req, res) => {
  res.redirect(`http://localhost:1215${req.url}`);
});

App.get('/userInfo/:userIds', (req, res) => {
  res.redirect(`http://localhost:1215${req.url}`);
});

App.use(express.json());
App.use(cors());

App.listen(1986, () => console.log('listening on port 1986'));