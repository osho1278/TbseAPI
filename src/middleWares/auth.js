var auth =function (req, res, next) {
    console.log(req.headers);
    if(req.headers && req.headers.authorization){
    //console.error(err.stack);
    next();
    }
    else{
    res.send(401,'UnAuthorized')
    }
  }
module.exports=auth