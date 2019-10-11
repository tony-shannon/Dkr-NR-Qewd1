//console.log("Running inside Qewd on Docker Container on Node");
var test1 = require('./test1');


module.exports = function(args, finished) {

   var jsonIn = {
      "key1": "String1",
      "key2": 42,
      "key3": false

   }

   finished(test1.call(this, jsonIn));
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