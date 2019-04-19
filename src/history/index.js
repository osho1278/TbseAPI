var con = require('../db');

exports.myTransactionHistory = function (req, res) {
    resultArr = [];
    var userName = req.query.userName;
    console.log('listUser Called')
    con.query("SELECT * FROM inventory where addedBy='"+userName+"' OR approvedBy='"+userName+"' order by time desc", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });

}
