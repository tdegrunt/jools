Jools
=====

## What is Jools?

Jools is a forward chaining Business Rules Engine (BRE), currently implementing as an inference engine.

## JSON Rules 

Jools uses JSON rules. Rules consist of a descriptive name, one or more conditions and one or more consequences. 
Jools allows for very expressive rules, take for example the following:

    {
      "name": "say hello to Dave",
      "condition": 
        function(name) {
          return name == "Dave";
        }
      ,
      "consequence": 
        function(name) {
          console.log("Hello " + name);
        }
    }

Provided the following fact, the rule would output "Hello Dave" to the console:

    {
      "name": "Dave",
      "email": "dave@ibm.com"
    }


