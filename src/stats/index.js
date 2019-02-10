var con = require('../db');

exports.listItem= function (req, res) {
    resultArr=[];
    con.query("SELECT * FROM items order by name", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        for(val of result){
          if(resultArr.find((item)=> item.name === val.name)){
              console.log('found a value',val.name);
              for(resVal of resultArr){
                console.log('found a value',resVal);
                  if(resVal.name === val.name){
                    console.log('editing',val.name);

                    if(val.operation==='Add'){
                        console.log('Add')
                        resVal.quantity=resVal.quantity+parseInt(val.quantity)
                        }
                      else{
                        console.log('Delete')
                          resVal.quantity=resVal.quantity-parseInt(val.quantity)
                          }
                      }
                    }
                  
          }else{
            if(val.operation==='Add'){
              resultArr.push({
                  name:val.name,
                  quantity:parseInt(val.quantity)
              })
            }else{
                resultArr.push({
                    name:val.name,
                    quantity:-parseInt(val.quantity)
                })
            }
        }
    }
        res.send(resultArr)
      });
  }
