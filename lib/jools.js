/**
 * Module dependencies.
 */

/**
 * version
 */
exports.version = '0.0.1';

/**
 * Returns an array of parameter names of the function f
 *
 * @param {Function} f
 */
Function.paramNames = function (f) {
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
Function.paramsToArguments = function (obj, params) {
  var args = [];
  params.forEach(function (p) {
    args.push(obj[p]);
  });
  return args;
}

/**
 * Jools constructor.
 *
 * A rule consists of:
 *   - Descriptive name
 *   - One or more conditions
 *   - One or more actions, which are the consequence of the rule and only fired if
 *     all conditions evaluate to true.
 *
 * @param {Object} rules
 */
function Jools(rules) {
  this.rules = rules;
}

/**
 * execute rules with info
 *
 * @param {Object} info
 */
Jools.prototype.execute = function (info) {
  var self = this
    , session = {};

  this.rules.forEach(function (rule) {
    var outcome = false;
    rule.conditions.forEach(function (condition) {
      var arguments = Function.paramsToArguments(info, Function.paramNames(condition));

      if (outcome) {
        outcome = outcome && condition.apply(session, arguments); 
      } else {
        outcome = condition.apply(session, arguments);
      }
    });
    if (outcome) {
      rule.actions.forEach(function (action) {
        var arguments = Function.paramsToArguments(info, Function.paramNames(action));
        action.apply(session, arguments);
      });
    }
  });
  return session;
};

module.exports = Jools;

