'use strict';
const loginsCtrl = require('./controllers/LoginController');
const productCtrl = require('./controllers/ProductController');

module.exports = function (app) {
  app.post('/login/checklogin', loginsCtrl.login);
  app.post('/login/insertuser', loginsCtrl.store);
  app.post('/login/getuser', loginsCtrl.detail);
  app.post('/login/updateuser/:userId', loginsCtrl.update);
  app.post('/login/deleteuser/:userId', loginsCtrl.delete);
  app.get('/product/getall', productCtrl.get);
  app.get('/product/gettype', productCtrl.getType);
  app.get('/product/getbytype', productCtrl.getByType);
};
