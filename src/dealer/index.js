var con = require('../db');
exports.listDealers= function (req, res) {
    console.log('listUser Called')
    con.query("SELECT * FROM liquor", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send([])
      });
  };


  exports.addDealers=function (req, res) {
    var liquorName = req.body.liquorName;
    console.log(req.body);
    if(liquorName){
    con.query("insert into liquor(`name`) values('"+liquorName+"')", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
    }else{
        res.send('UnAuthorized').status(404);
    }
  }
