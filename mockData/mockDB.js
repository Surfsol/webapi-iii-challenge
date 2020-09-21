const dbConfig = require("../data/dbConfig");

const db = require('../data/dbConfig.js');

module.exports = {
    get
  };

  function get() {
    return db('liveNation')
  }