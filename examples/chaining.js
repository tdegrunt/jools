var Jools = require('../lib/jools');

var rules = [
  {
    "name": "frog is green",
    "condition": 
      function(animal) {
        return animal == "frog";
      }
    ,
    "consequence": 
      function(name) {
        this.color = "green";
      }
  },
  {
    "name": "canary is yellow",
    "condition": 
      function(animal) {
        return animal == "canary";
      }
    ,
    "consequence": 
      function(name) {
        this.color = "yellow";
      }
  },
  {
    "name": "croaks and eats flies",
    "condition": 
      function(eats) {
        return eats && eats.indexOf('croaks') >= 0 &&
          eats.indexOf('flies') >= 0;
      }
    ,
    "consequence": 
      function() {
        this.animal = "frog";
      }
  },
  {
    "name": "chirps and sings",
    "condition": 
      function(does) {
        return does && does.indexOf('chirps') >= 0 &&
          does.indexOf('sings') >= 0;
      }
    ,
    "consequence": 
      function() {
        this.animal = "canary";
      }
  }
];

var fritz =  {
  "name": "Fritz",
  "eats": ["croaks", "flies"],
};
var tweety =  {
  "name": "Tweety",
  "does": ["chirps", "sings"],
};


var j = new Jools(rules);
var result = j.execute(fritz);
console.log(result.name + " is " + result.color);

console.log("------");

var result = j.execute(tweety);
console.log(result.name + " is " + result.color);

