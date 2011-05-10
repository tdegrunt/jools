/**
 * Returns an array of parameter names of the function f
 *
 * @param {Function} f
 */
module.exports.paramNames = function (f) {
  var m = /function[^\(]*\(([^\)]*)\)/.exec(f.toString());
  if (!m) throw new TypeError("Invalid functions");

  var params = [];
  m[1].split(',').forEach(function (p) {
    params.push(p.replace(/^\s*|\s*$/g, ''));
  });

  return params;
};

/**
 * Creates an array of arguments
 *
 * @param {Object} obj
 * @param {Array} params
 */
module.exports.paramsToArguments = function (obj, params) {
  var args = [];
  params.forEach(function (p) {
    args.push(obj[p]);
  });
  return args;
}

