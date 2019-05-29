var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Dark Web' });
});

router.get('/levels/:level', function (req, res) {
      // Condition - if the parameter in the route is above or equal to 5, it will error out.
      if (req.params.level >= 5 || req.params.level <= 0) {
        // Render the error page, letting them know that they have goofed up.
        res.render('error', { message: "Error, This page does not exist", title: "The Dark Web"});
      } 
      // If the level that is in the URL corresponds with the loops level, render the specified resource.
      // Each resource is divided into levels, with the prefix being "level_".
      else {
        res.render('levels/level_' + req.params.level);
      }
});


module.exports = router;