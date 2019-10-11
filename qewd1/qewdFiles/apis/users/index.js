//console.log("Running inside Qewd on Docker Container on Node");
var test1 = require('./users.js');


module.exports = function(args, finished) {


   var arx_documentName = "RAdb"; // should come in as arg and come out of here
   var arx_docSubName = "users";     // should come in as arg and come out of here
   
   var arx_body = {
        "id": 2, // should come in as arg and come out of here
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      }

  var iDN = 3;


   var jsonIn = {
      "key1": "String1",
      "key2": 42,
      "key3": false

   }

console.log("where will this end up?" + args.req.body.id + "whats back there?");

   finished(test1.call(this, arx_documentName, arx_docSubName, args.req.body, args.req.body.id));
  };