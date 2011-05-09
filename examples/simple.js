var Jools = require('jools');

var rules = [
  {
    "conditions": [
      function(input) {
        return input.type == "living" && input.temperature > 20 || 
          input.type == "passing" && input.temperature > 16;
      }
    ],
    "actions": [
      function(input) {
        console.log('turn off heater in room '+input.name)
      }
    ]
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

