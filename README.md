Jools
=====

## What is Jools?

Jools is a forward chaining Business Rules Engine (BRE), currently implementing using a naive linear algorithm.

## JSON Rules 

Jools uses JSON rules. Rules consist of a descriptive name, one or more conditions and one or more consequences. 
Jools allows for very expressive rules, take for example the following:

    {
      "name": "hello rule",
      "condition": 
        function(name) {
          return name == "David";
        }
      ,
      "consequence": 
        function(name) {
          console.log("Hello " + name);
        }
    }

Provided the following information, the rule would output "Hello David" to the console:

    {
      "name": "David",
      "email": "email@user.com"
    }


