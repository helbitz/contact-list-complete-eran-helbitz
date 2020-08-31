const contacts = require('./contacts/contacts.service.js');
module.exports = function (app) {
  app.configure(contacts);
};
