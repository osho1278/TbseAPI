var con = require('../db');

exports.login= function (req, res) {
    console.log('ListItemsCalled',req.body)
    var userName = req.body.userName;
    var password = req.body.password;
    con.query("SELECT * FROM user where userName='"+userName+"' and password='"+password+"' ", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        if(result.length!=0){
        res.send(result)
        }else{
            res.status(401).send({data:'Unathourized'});
        }
      });
  };