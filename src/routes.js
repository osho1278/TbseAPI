module.exports = function(app) {
    var users = require('./users/index');
    var login = require('./auth')
    var item= require('./items')
    var store = require('./store')

    // todoList Routes
    app.route('/users')
      .get(users.listUsers)
      .post(users.addUser);
    
    app.route('/store')
      .get(store.listStores)
      .post(store.addStore);

    app.route('/login')
    .post(login.login);

    app.route('/items')
    .post(item.addItem)
    .get(item.listItem)
  };
  