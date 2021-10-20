'use strict';

const Phrase = (sequelize, DataTypes) => sequelize.define('Phrase', {
  words: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Phrase;