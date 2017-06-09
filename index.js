'use strict';

const mkdirp = require('mkdirp-promise');
const path = require('path');
const getParents = require('./getParents');

const mkdirpOnce = (path) => {
  this.made = this.made || {};
  if ( !this.made[path] ) {
    this.made[path] = mkdirp(path)
      .then(() => {
        this.made[path] = true;
        const parents = getParents(path);
        parents.forEach(parent => this.made[parent] = true);
      });
  }
  return this.made[path];
};

module.exports = mkdirpOnce;
