'use strict';

var path = require('path');
var getParents = (inPath) => {
  var parts = inPath.split(path.sep);
  parts = parts.slice(1, parts.length);
  var out = [];
  for (let i = 1; i < parts.length; i++) {
    var pathTo = path.sep + parts.slice(0, i).join(path.sep);
    out.push(pathTo);
  }

  return out;
};

module.exports = getParents;
