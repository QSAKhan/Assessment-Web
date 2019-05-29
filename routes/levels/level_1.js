var express = require('express');
var router = express.Router();

/* GET level 1 page. */
router.get('/levels', function(req, res, next) {
  res.render('level_1.ejs', { title: 'The Dark Web : Level 1' });
});

module.exports = router;