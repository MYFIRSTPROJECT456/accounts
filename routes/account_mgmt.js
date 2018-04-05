var express = require('express');
var router = express.Router();
var branch_mgmtmodel = require('../model/account_mgmtmodel');

router.get('/account_mgmt', function(req, res, next) {
  res.render('account_mgmt');
});

module.exports = router;