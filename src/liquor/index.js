var con = require('../db');
exports.listLiquor= function (req, res) {
    console.log('listUser Called')
    con.query("SELECT * FROM liquor", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
  };


  exports.addLiquor=function (req, res) {
    var liquorName = req.body.liquorName;
    console.log(req.body);
    if(liquorName){
    con.query("insert into liquor(`liquorName`) values('"+liquorName+"')", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
    }else{
        res.send('UnAuthorized').status(404);
    }
  }
