'use strict';

const Movies = require('./data/movies.json');

exports.seed = async (Knex) => {
  await Knex('movies').truncate();
  await Knex('movies').insert(Movies);
};
