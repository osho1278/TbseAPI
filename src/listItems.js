var list = app.get('/listUsers', function (req, res) {
    console.log('ListItemsCalled')
    res.send('ListItemsCalled')
  })

module.exports(list);