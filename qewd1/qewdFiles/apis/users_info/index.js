//console.log("Running inside Qewd on Docker Container on Node");
//var test1 = require('./usersinfo.js');


//module.exports = function(args, finished) {


 //  var arx_documentName = "RAdb"; // should come in as arg and come out of here
 //  var arx_docSubName = "users";     // should come in as arg and come out of here
   
 
  



  // finished(test1.call(this, arx_documentName, arx_docSubName, args.id));
 // };



  module.exports = function(args, finished) {


  var documentName = "RAdb"; // should come in as arg and come out of here
  var docSubName = "users";     // should come in as arg and come out of here
  var id = 35;//;args.id;
  var id = args.id;

  console.log("args are" + args);
  console.log(args);
  console.log(args.id);
  console.log("end of args");

    //if (typeof id === 'undefined' || id === '') {
    if (id == 66) {
      console.log("hit 66");
      let doc = this.db.use(documentName, docSubName);  
      docout = doc.getDocument(true);
      docArr = Object.values(docout);
      return finished(docArr);
      //return doc.getDocument(true);
    }
    else if (id == 35)
    {
    //let doc = this.db.use(documentName, docSubName, id);
    // if (!doc.exists) {
   // return {error: 'No Document exists for that Id (' + id + ')'};
      return finished({ok: true}); 
    }
    else
    {
    let doc = this.db.use(documentName, docSubName, id);
    return finished(doc.getDocument(true));
    //return  {ok: false}
    }
    //var 
  
  
  
  //var doc = this.db.use(documentName, docSubName);
  //var id = PostedId; //doc.increment();  // not using the counter in YDB, which will go on anyway
  //doc.$(id).setDocument(body);
  // create indices
  //var docIndex = this.db.use(documentName + 'Index', docSubName);
  /*
  traverse(body).map(function(node) {
    if (typeof node !== 'object' && node !== '') {
      var subscripts = [];
      this.path.forEach(function(sub) {
        if (!isInt(sub)) subscripts.push(sub);
      });
      subscripts.push(node);
      subscripts.push(id);
      docIndex.$(subscripts).value = id;
    }
  });
  */
  
  //return {
  //  ok: true,
  //  id: id
  //};
  
  }