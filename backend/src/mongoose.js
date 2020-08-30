const mongoose = require('mongoose');
const logger = require('./logger');

module.exports = function (app) {
  mongoose.connect("mongodb+srv://helbitz:eran6008@contacts-cluster.sd2ld.mongodb.net/contactsdb?retryWrites=true&w=majority").catch(err => {
    logger.error(err);
    process.exit(1);
  });
  
  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
