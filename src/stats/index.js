var con = require('../db');

exports.stockHoldings = function (req, res) {
    resultArr = [];
    var branchName = req.query.branchName;
    con.query("SELECT * FROM inventory where dealer='" + branchName + "' OR branchName='" + branchName + "' order by productName", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        for (val of result) {
            if (resultArr.find((item) => item.productName === val.productName)) {
                // console.log('found a value',val.productName);
                for (resVal of resultArr) {
                    //  console.log('found a value',resVal);
                    if (resVal.productName === val.productName) {
                        console.log('editing', val.productName);

                        if (val.transactionType === 'received') {
                            console.log('received')
                            resVal.quantity = resVal.quantity + parseInt(val.quantity)
                        }
                        else {
                            if (val.dealer === branchName) {
                                resVal.quantity = resVal.quantity - parseInt(val.quantity)

                            } else {
                                resVal.quantity = resVal.quantity + parseInt(val.quantity)
                            }
                        }
                    }
                }

            } else {
                if (val.transactionType === 'received') {
                    resultArr.push({
                        ...val,
                        productName: val.productName,
                        quantity: parseInt(val.quantity)
                    })
                } else {

                    if (val.dealer === branchName) {
                        resultArr.push({
                            ...val,
                            productName: val.productName,
                            quantity: -parseInt(val.quantity)
                        })
                    } else {
                        resultArr.push({
                            ...val,
                            productName: val.productName,
                            quantity: parseInt(val.quantity)
                        })
                    }
                }
            }
        }
        res.send(resultArr)
    });
}
