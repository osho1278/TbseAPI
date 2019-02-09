var con = require('../db');

exports.login= function (req, res) {
    console.log('ListItemsCalled')
    var userName = req.body.userName;
    var password = req.body.password;
    con.query("SELECT * FROM users where userName='"+userName+"' and password='"+password+"' ", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        if(result.length!=0){
        res.send(result)
        }else{
            res.send(401, 'Unathourized');
        }
      });
  };