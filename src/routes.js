module.exports = function(app) {
    var users = require('./users/index');
    var login = require('./auth')
    var store = require('./store')

    var category=require('./category');
    var dealers=require('./dealer');
    var history=require('./history');
    
    var stats= require('./stats')
    var liquor=require('./liquor')
    var inventory=require('./inventory')
    // todoList Routes
    app.route('/users')
      .get(users.listUsers)
      .post(users.addUser);
    
      app.route('/myTransactionHistory')
      .get(history.myTransactionHistory)
    

    app.route('/stores')
      .get(store.listStores)
      .post(store.addStore);

     
    app.route('/liquors')
      .get(liquor.listLiquor)
      .post(liquor.addLiquor);
  
      app.route('/getLiquorStock')
      .get(liquor.getLiquorStock)  


    app.route('/login')
    .post(login.login);

    // app.route('/stats')
    // .get(stats.listItem)

    app.route('/stockHoldings')
    .get(stats.stockHoldings)


    app.route('/categories')
    .get(category.listCategory)


    app.route('/dealers')
    .get(dealers.listDealers)

    

  app.route('/inventory')
  .get(inventory.listInventory)
  .post(inventory.addToInventory)


  app.route('/unApprovedInventory')
  .get(inventory.unApprovedInventory)


  app.route('/approveInventory')
  .post(inventory.approveInventory)
  };
  