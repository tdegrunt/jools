exports.version = '0.0.1';

/**
 * Jools constructor.
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
  var self = this;

  this.rules.forEach(function (rule) {
    var outcome = false;
    rule.conditions.forEach(function (condition) {
      if (outcome) {
        outcome = outcome && condition(info); 
      } else {
        outcome = condition(info);
      }
    });
    if (outcome) {
      rule.actions.forEach(function (action) {
        action(info);
      });
    }
  });
};

module.exports = Jools;

