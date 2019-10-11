module.exports = function(testParam1, whatismethod) {
    //var thing1 = {"key1": "valueA"};

    var jsonInB = {
      "key1": "StringABC",
      "key2": 45,
      "key3": false

   }

   function addUp(n1,n2){
     return (n1 + n2);
   }

    var thing1 = { "thingA": testParam1,
                  "thingB": jsonInB,
                  "numA": addUp(3,6),
                  "APImethod": whatismethod};
    //var thing1 = {"thingA": testParam1};
    return thing1;
    //return {ok: true};
  }