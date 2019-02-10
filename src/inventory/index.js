var con = require('../db');
exports.listInventory= function (req, res) {
    console.log('listUser Called')
    con.query("SELECT * FROM inventory", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
  };


  exports.addToInventory=function (req, res) {
    var branchName = req.body.branchName;
    var liquorName = req.body.liquorName;
    var quantity = req.body.quantity;
    var addedBy = req.body.addedBy;
    console.log(req.body);
    if(liquorName){
    con.query("insert into inventory(`liquorName`,`store_id`,`quantity`,`addedBy`) values('"+liquorName+"','"+branchName+"','"+quantity+"','"+addedBy+"')", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
    }else{
        res.send('UnAuthorized').status(404);
    }
  }
