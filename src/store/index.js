var con = require('../db');


exports.listStores= function (req, res) {
    console.log('ListItemsCalled')
    con.query("SELECT * FROM store", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
  };


  exports.addStore=function (req, res) {
    var name = req.body.name;
    var location = req.body.location;
    console.log(req.body);
    if(name && location){
    con.query("insert into store(`name`,`location`) values('"+name+"','"+location+"')", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
    }else{
        res.send('Wrong').status(404);
    }
  }
