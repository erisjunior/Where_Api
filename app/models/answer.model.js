module.exports = (sequelize, Sequelize) => {
  const Answer = sequelize.define('answer', {
    store_name: {
      type: Sequelize.STRING
    },
    store_phone: {
      type: Sequelize.STRING
    },
    store_address: {
      type: Sequelize.STRING
    },
    store_image: {
      type: Sequelize.STRING
    },
  });

  return Answer;
};
