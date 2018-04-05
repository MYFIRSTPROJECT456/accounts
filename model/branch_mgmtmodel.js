var pool = require('../util/dbconnection');

var accountmodel = {
	addBranch:function(inputData, cb){
		console.log('inputData ka data', inputData);
		var sql='';
		var params = [];
		if (inputData.id) {
			sql = "UPDATE `tbl_branch` SET `brname`=?,`braddress`=?,`branchemail`=?,`branchphone`=?,`brtaxnumber1`=?,`brtaxnumber2`=?,`brtaxnumber3`=?,`brtaxnumber4`=?,`brtaxnumber5`=? where brid= ?";
			params =[inputData.branch_name, inputData.branch_address, inputData.branch_email, inputData.branch_phone, inputData.text_number1, inputData.text_number2, inputData.text_number3, inputData.text_number4, inputData.text_number5, inputData.id];

		}else
		{
			sql = "insert into tbl_branch(coid,brname, braddress, `branchemail`, `branchphone`, brtaxnumber1, brtaxnumber2, brtaxnumber3, brtaxnumber4, brtaxnumber5, crdate) values(?,?, ?, ?, ?, ?, ?, ?, ?, ?, now())";
			params =[inputData.coid,inputData.brname, inputData.braddress, inputData.branchemail, inputData.branchphone, inputData.brtaxnumber1, inputData.brtaxnumber2, inputData.brtaxnumber3, inputData.brtaxnumber4, inputData.brtaxnumber5];
		}
		console.log('inside='+sql);
		pool.getConnection(function(error, connection){
			if (error) {
				console.log("connection error");
			}
			else{
				connection.query(sql,params, function(error, result){
					if (error) {
						cb(error, null);
					}
					else{
						cb(null, result);
					}
				});
			}
			connection.release();
		});
	},
	listBranch:function(cb){
		var sql = "select `brid`, `brname`, `braddress`, `branchemail`, `branchphone`, `brtaxnumber1`, `brtaxnumber2`, `brtaxnumber3`, `brtaxnumber4`, `brtaxnumber5` from tbl_branch WHERE status="+0;
		console.log('inside='+sql);
		pool.getConnection(function(error, connection){
			if (error) {
				console.log("connection error");
			}
			else{
				connection.query(sql, function(error, result){
					if (error) {
						cb(error, null);
					}
					else{
						cb(null, result);
					}
				});
			}
			connection.release();
		});
	},
	deleteBranch:function(tblclick, cb){
	
    var sql = "UPDATE `tbl_branch` SET `status` = '-1' WHERE `brid`="+tblclick;
		console.log('inside='+sql);
		pool.getConnection(function(error, connection){
			if (error) {
				console.log("connection error");
			}
			else{
				connection.query(sql, function(error, result){
					if (error) {
						cb(error, null);
					}
					else{
						cb(null, result);
					}
				});
			}
			connection.release();
		});
	},

}

module.exports = accountmodel;