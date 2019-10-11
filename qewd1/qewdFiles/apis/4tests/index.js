//console.log("Running inside Qewd on Docker Container on Node");
var test1 = require('./test1');


module.exports = function(args, doDone) {

   var jsonIn = {
      "key1": "String123",
     "key2": 42,
      "key3": false

  }

   //var jsonArgs = args;

   doDone(test1.call(this, jsonIn, args.req.method));
   //finished(test1.call(this, "testParaX"));
      //console.log("in the function"));
      //  {console.log("in the function")
    //  hello: 'world3'
   // }
   // );
   
   // return {
   //   ok: true,
   //   id: id
   // };
   //finished(
     
   //  console.log("in the function")
   //  );
   // return {
  //   ok: true
  //  };
  };