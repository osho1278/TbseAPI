var con = require('../db');
exports.listInventory= function (req, res) {
    console.log('listUser Called')
    con.query("SELECT * FROM inventory", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
  };


  
  exports.unApprovedInventory= function (req, res) {
    console.log('listUser Called')
    var branchName = req.query.branchName;
    con.query("SELECT * FROM inventory where approved='false'and branchName='"+branchName+"'", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
  };

  exports.approveInventory= function (req, res) {
    console.log('approveInventory Called');
    var id=req.body.id;
    var productName=req.body.productName;
    var branchName = req.body.branchName;
    var approvedBy=req.body.approvedBy;

    console.log("Update inventory set approved='true', approvedBy='"+approvedBy+"' where branchName='"+branchName+"' and productName='"+productName+"' and id='"+id+"'")
    if(id && productName && branchName && approvedBy){
    con.query("Update inventory set approved='true',approvedBy='"+approvedBy+"' where branchName='"+branchName+"' and productName='"+productName+"' and id='"+id+"' and approved!='true'"  , function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        res.send(result)
      });
    }
    else{
        res.status(422).send('Invalid request')
    }
  };


  exports.addToInventory=function (req, res) {
    var category=req.body.category;
    var dealer=req.body.dealer;
    var branchName = req.body.branchName;
    var productName = req.body.productName;
    var quantity = req.body.quantity;
    var addedBy = req.body.addedBy;
    var price=req.body.price;
    var unit= req.body.unit;
  
    var transactionType=req.body.transactionType;
    var approved=req.body.approved;


    console.log(req.body);
    if(productName){
    con.query("insert into inventory(`productName`,`branchName`,`quantity`,`addedBy`,`category`,`dealer`,`price`,`unit`,`transactionType`,`approved`) values('"+productName+"','"+branchName+"','"+quantity+"','"+addedBy+"','"+category+"','"+dealer+"','"+price+"','"+unit+"','"+transactionType+"','"+approved+"')", function (err, result, fields) {
        if (err) {
            throw err;}
        else{
            con.query("insert into liquor(`name`) values('"+productName+"')", function (err, result, fields) {
                if (err){
                     console.log(err && err.sqlMessage);}
                console.log(result);
                
              });
        }            
        console.log(result);
        res.send(result)
      });
    }else{
        res.send('UnAuthorized').status(404);
    }
  }
