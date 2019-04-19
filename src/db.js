var mysql = require('mysql');
// var con = mysql.createConnection({
//     host: "tbseinstance.cxjxqzjtgpjr.us-east-2.rds.amazonaws.com",
//     user: "osho",
//     password: "osho!23B",
//     database : 'tbse'
//   });

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "osho!23B",
    database : 'tbse'
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  module.exports = con;
