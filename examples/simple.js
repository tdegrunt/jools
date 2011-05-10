var Jools = require('../lib/jools');

var rules = [
  {
    "name": "Check heater and turn off if needed",
    "condition": 
      function(type, temperature) {
        return type == "living" && temperature > 20 || 
          type == "passing" && temperature > 16;
      }
    ,
    "consequence": 
      function(name) {
        console.log('turn off heater in room '+name)
      }
  }
];

var lounge =  {
  "name": "lounge",
  "temperature": 21,
  "type": "living"
};

var hall = {
  "name": "hall",
  "temperature": 16,
  "type": "passing"
};

var j = new Jools(rules);
j.execute(lounge);
j.execute(hall);

