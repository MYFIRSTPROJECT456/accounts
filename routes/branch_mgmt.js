var express = require('express');
var router = express.Router();
var branch_mgmtmodel = require('../model/branch_mgmtmodel');
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/account_group', function(req, res, next) {
  res.render('account_group');
});

router.get('/branch_mgmt', function(req, res, next) {
  branch_mgmtmodel.listBranch(function(error, result){
    if (error) {
      res.send(error);
    }
    else{
      res.send(result);
    }
  });
});

router.post('/addbranchdata', function(req, res, next){
  //var formdata = JSON.parse(req.body.formdata)[0];
  
  var inputdatafiled =  {
        "coid": "16",
        "brname": "thane",
        "braddress": "vashi",
        "branchemail": "tha@gmail.com",
        "branchphone": 48245822,
        "brtaxnumber1": "jhkkjhhk",
        "brtaxnumber2": "fgh",
        "brtaxnumber3": "jhhj",
        "brtaxnumber4": "kjlghjgf",
        "brtaxnumber5": "kjjkgh"
    }
  console.log(inputdatafiled);
  /*res.send({
    status :'1',
    status_msg : 'Error while saving'
  });*/
  branch_mgmtmodel.addBranch(inputdatafiled, function(error, result){
    if (error) {
      console.log('error', error);
      res.send({
    status :'1',
    status_msg : 'Error while saving'
  });
    }
    else{
      res.send({
    status :'0',
    status_msg : 'inserted successfully'
  });
    }
  });
});


router.get('/bank_transaction', function(req, res, next) {
  res.render('bank_transaction');
});

router.get('/cash_transaction', function(req, res, next) {
  res.render('cash_transaction');
});

router.get('/landing', function(req, res, next) {
  res.render('landing');
});

router.get('/jv_transactionp', function(req, res, next) {
  res.render('jv_transactionp');
});

router.get('/jv_transaction', function(req, res, next) {
  res.render('jv_transaction');
});

router.get('/financeyear', function(req, res, next) {
  res.render('financeyear');
});

router.post('/branchdelete', function(req, res, next) {
var tblclick  = req.body.tblclick;
console.log(tblclick);
  branch_mgmtmodel.deleteBranch(tblclick, function(error, result){
   if (!error && result && result.affectedRows > 0) {
        var resp = {
            status: "0",
            status_msg: "Success"
        };
        var response = JSON.parse(JSON.stringify(resp));
        res.send(response);
    } else {
      var error_msg="Failed to delete task";
      if(error){error_msg = error["sqlMessage"] }
        var resp = {
            status: "1",
            status_msg: error_msg
        };
        var response = JSON.parse(JSON.stringify(resp));
        res.send(response);
    } 
});
});


module.exports = router;
