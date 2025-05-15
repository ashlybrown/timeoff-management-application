'use strict';

const models = require('../lib/model/db');

module.exports = function() {
  return models.sequelize.sync()
    .then(function() {
      console.log('Database schema synced successfully');
      return Promise.resolve(1);
    })
    .catch(function(error) {
      console.error('Failed to sync database schema', error);
      return Promise.reject(error);
    });
};
