module.exports = function(app) {
    var users = require('./users/index');
    var login = require('./auth')
    var item= require('./items')
    // todoList Routes
    app.route('/users')
      .get(users.listUsers)
      .post(users.addUser);
  
  
    app.route('/login')
    .post(login.login);

    app.route('/items')
    .post(item.addItem)
    .get(item.listItem)
  };
  