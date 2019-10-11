//console.log("Running inside Qewd on Docker Container on Node");
var test1 = require('./getDoc');


module.exports = function(args, finished) {


   var arx_documentName = "TestDB1"; // should come in as arg and come out of here
   var arx_docSubName = "users";     // should come in as arg and come out of here
   var arx_id = 1;
 



   var jsonIn = {
      "key1": "String1",
      "key2": 42,
      "key3": false

   }

   finished(test1.call(this, arx_documentName, arx_docSubName, arx_id));
  };