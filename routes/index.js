var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ex/index', { title: '샘플페이지' });
});

module.exports = router;

