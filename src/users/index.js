var con = require('../db');
exports.listUsers= function (req, res) {
    console.log('listUser Called')
    con.query("SELECT * FROM user", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
  };


  exports.addUser=function (req, res) {
    var userName = req.body.userName;
    var password = req.body.password;
    var fullName = req.body.fullName || '';
    var branch = req.body.basebranch || '';
    var role = req.body.roles || '';
    console.log(req.body);
    if(userName && password){
    con.query("insert into user(`userName`,`password`,`fullName`,`role`,`branch`) values('"+userName+"','"+password+"','"+fullName+"','"+role+"','"+branch+"')", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
    }else{
        res.send('UnAuthorized').status(404);
    }
  }
