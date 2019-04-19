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
    con.query("insert into liquor(`name`) values('"+liquorName+"')", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
    }else{
        res.send('UnAuthorized').status(404);
    }
  }



  exports.getLiquorStock= function (req, res) {
    console.log('listUser Called',req.query.name)

    let stockReceived = '';
    con.query("SELECT sum(quantity) as quantity FROM inventory where branchName='"+req.query.branchName+"' and productName='"+req.query.name+"' and approved='true'", function (err, result, fields) {
        if (err) {
            console.log( err);
        }
        stockReceived=parseInt(result[0]["quantity"]||0);

        let stockSent = '';
        con.query("SELECT sum(quantity) as quantity FROM inventory where dealer='"+req.query.branchName+"' and productName='"+req.query.name+"' and transactionType='sent'", function (err, result, fields) {
            if (err) {
                console.log( err);
            }
            stockSent=parseInt(result[0]["quantity"] || 0);
            console.log('Current Stock =  ',stockReceived-stockSent);
            res.send({currentStock:stockReceived-stockSent})
      });
    });

    
    
  };
