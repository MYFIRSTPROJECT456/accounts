/*var pool = require('../util/dbconnection');

var accountmodel = {
	addAccount:function(inputData, cb){
		var sql='';
		var params = [];
		if (inputData.id) {
			sql = "UPDATE `tbl_branch` SET `brname`=?,`braddress`=?,`branchemail`=?,`branchphone`=?,`brtaxnumber1`=?,`brtaxnumber2`=?,`brtaxnumber3`=?,`brtaxnumber4`=?,`brtaxnumber5`=?";
			params =[inputData.branch_name, inputData.branch_address, inputData.branch_email, inputData.branch_phone, inputData.text_number1, inputData.text_number2, inputData.text_number3, inputData.text_number4, inputData.text_number5];

		}else
		{
			sql = "insert into tbl_branch(coid, brname, braddress, `branchemail`, `branchphone`, brtaxnumber1, brtaxnumber2, brtaxnumber3, brtaxnumber4, brtaxnumber5, crdate,crusr) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, now(),?)";
			params =[coid, inputData.branch_name, inputData.branch_address, inputData.branch_email, inputData.branch_phone, inputData.text_number1, inputData.text_number2, inputData.text_number3, inputData.text_number4, inputData.text_number5,inputData.user.enid];
		}
		console.log('inside='+sql);
		var sql = "";

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
	listAccount:function(cb){
		var sql = "select `brid`, `brname`, `braddress`, `branchemail`, `branchphone`, `brtaxnumber1`, `brtaxnumber2`, `brtaxnumber3` from tbl_branch";
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
			//connection.realese();
		});
	}

}

module.exports = accountmodel;*/