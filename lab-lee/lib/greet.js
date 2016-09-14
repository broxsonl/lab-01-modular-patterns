'use strict';

//Creating an empty object to be exported globally on the module object.
module.exports = exports = {};

exports.greet = function(name) {
  //Check to see if the datatype is a string, which it must be as a name.
  if(typeof(name) !== 'string') {
    throw new Error('Must be a string');
  }
  return 'hello ' + name;
};
