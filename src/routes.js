module.exports = function(app) {
    var users = require('./users/index');
    var login = require('./auth')
    var store = require('./store')

    var stats= require('./stats')
    var liquor=require('./liquor')
    var inventory=require('./inventory')
    // todoList Routes
    app.route('/users')
      .get(users.listUsers)
      .post(users.addUser);
    
    app.route('/store')
      .get(store.listStores)
      .post(store.addStore);

     
    app.route('/liquor')
      .get(liquor.listLiquor)
      .post(liquor.addLiquor);
  
    app.route('/login')
    .post(login.login);

    app.route('/stats')
    .get(stats.listItem)

  app.route('/inventory')
  .get(inventory.listInventory)
  .post(inventory.addToInventory)

  };
  