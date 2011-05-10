Jools
=====

## What is Jools?

Jools is a Business Rules Engine

## JSON Rules 

Jools uses JSON rules, resulting in very expressive rule, take for example the following:

    {
      "name": "hello rule",
      "conditions": [
        function(name) {
          return name == "David";
        }
      ],
      "actions": [
        function(name) {
          console.log("Hello " + name);
        }
      ]
    }

Provided the following information, the rule would output "Hello David" to the console:

    {
      "name": "David",
      "email": "email@user.com"
    }


