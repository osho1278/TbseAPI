module.exports = function(app) {
    var users = require('./users/index');
    var login = require('./auth')
<<<<<<< HEAD
    var item= require('./items')
    var store = require('./store')

=======
    var stats= require('./stats')
    var liquor=require('./liquor')
    var inventory=require('./inventory')
>>>>>>> 99d71dbed979c5e6a397f39204d741876c4f4acd
    // todoList Routes
    app.route('/users')
      .get(users.listUsers)
      .post(users.addUser);
<<<<<<< HEAD
    
    app.route('/store')
      .get(store.listStores)
      .post(store.addStore);

=======
     
    app.route('/liquor')
      .get(liquor.listLiquor)
      .post(liquor.addLiquor);
  
>>>>>>> 99d71dbed979c5e6a397f39204d741876c4f4acd
    app.route('/login')
    .post(login.login);

    app.route('/stats')
    .get(stats.listItem)

  app.route('/inventory')
  .get(inventory.listInventory)
  .post(inventory.addToInventory)

  };
  