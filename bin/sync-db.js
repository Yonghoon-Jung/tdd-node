const models = require('../models');

module.exports = () => {
  const options = {
    force: process.env.NODE_ENV === 'test' ? true : false, // true로 하면 db 초기화 후 재생성
  };
  return models.sequelize.sync(options);
};
