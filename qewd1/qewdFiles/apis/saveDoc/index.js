//console.log("Running inside Qewd on Docker Container on Node");
var test1 = require('./test3');


module.exports = function(args, finished) {


   var arx_documentName = "TestDB1"; // should come in as arg and come out of here
   var arx_docSubName = "users";     // should come in as arg and come out of here
   
   var arx_body = {                   // should come in as arg and come out of here
       "name": "Leanne Graham",
       "username": "Bret",
       "email": "Sincere@april.biz",
       "address": {
         "street": "Kulas Light",
         "suite": "Apt. 556",
         "city": "Gwenborough",
         "zipcode": "92998-3874",
         "geo": {
           "lat": "-37.3159",
           "lng": "81.1496"
         }
       },
       "phone": "1-770-736-8031 x56442",
       "website": "hildegard.org",
       "company": {
         "name": "Romaguera-Crona",
         "catchPhrase": "Multi-layered client-server neural-net",
         "bs": "harness real-time e-markets"
       }
     }



   var jsonIn = {
      "key1": "String1",
      "key2": 42,
      "key3": false

   }

   finished(test1.call(this, arx_documentName, arx_docSubName, arx_body));
  };