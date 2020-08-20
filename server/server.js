var express = require('express');
var App = express();
var path = require('path');
var cors = require('cors');

App.get('/property/:listingId', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../public')});
});

App.get('/public/style.css', (req, res) => {
  res.sendFile('style.css', {root: path.join(__dirname, '../public')});
});

//Reviews
App.get('/propertyScores/:listingId', (req, res) => {
  res.redirect(`http://localhost:1215${req.url}`);
});

App.get('/propertyReviews/:listingId', (req, res) => {
  res.redirect(`http://localhost:1215${req.url}`);
});

App.get('/userInfo/:userIds', (req, res) => {
  res.redirect(`http://localhost:1215${req.url}`);
});

//Photo Carousel
App.get('/property/:ListingId/photos', (req, res) => {
  res.redirect(`http://localhost:3000/listing/${req.params.ListingId}/photos`);
});

//Checkin-Checkout
App.get('/property/:id/rooms', (req, res) => {
  console.log(req.params.id);
  res.redirect(`http://localhost:5000/listing/${req.params.id}/rooms`);
});

//Description
App.get('/property/:id/info', (req, res) => {
  res.redirect(`http://localhost:3333/listing/${req.params.id}/info`);
});

App.get('/property/:id/amenities', (req, res) => {
  res.redirect(`http://localhost:3333/listing/${req.params.id}/amenities`);
});

App.get('/property/:id/highlights', (req, res) => {
  res.redirect(`http://localhost:3333/listing/${req.params.id}/highlights`);
});

App.use(express.json());
App.use(cors());

App.listen(1986, () => console.log('listening on port 1986'));