var con = require('../db');
exports.listUsers= function (req, res) {
    console.log('ListItemsCalled')
    con.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
  };


  exports.addUser=function (req, res) {
    var userName = req.body.userName;
    var password = req.body.password;
    console.log(req.body);
    if(userName && password){
    con.query("insert into users(`userName`,`password`) values('"+userName+"','"+password+"')", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
    }else{
        res.send('Wrong').status(404);
    }
  }
