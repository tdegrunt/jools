/**
 * Module dependencies.
 */
var utils = require('./utils')
  , _ = require('underscore');

/**
 * version
 */
exports.version = '0.0.1';

/**
 * Jools constructor.
 *
 * A rule consists of:
 *   - Descriptive name
 *   - One or more conditions
 *   - One or more consequences, which are fired when all conditions evaluate to true.
 *
 * @param {Object} rules
 */
function Jools(rules) {
  this.rules = rules;
}

/**
 * execute rules with fact
 *
 * @param {Object} fact
 */
Jools.prototype.execute = function (fact) {
  var self = this
    , session = _.clone(fact);

  this.rules.forEach(function (rule) {
    var outcome;
    _.flatten([rule.condition]).forEach(function (cnd) {
      cnd.__args = cnd.__args || utils.paramNames(cnd); 

      if (outcome) {
        outcome = outcome && cnd.apply({}, utils.paramsToArguments(session, cnd.__args)); 
      } else {
        outcome = cnd.apply({}, utils.paramsToArguments(session, cnd.__args));
      }
    });
    if (outcome) {
      _.flatten([rule.consequence]).forEach(function (csq) {
        csq.__args = csq.__args || utils.paramNames(csq); 
        csq.apply(session, utils.paramsToArguments(fact, csq.__args));
        if (!_.isEqual(fact,session)) {
          // Fire all rules again!
        }
      });
    }
  });
  return session;
};

module.exports = Jools;

