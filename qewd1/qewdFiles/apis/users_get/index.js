  module.exports = function(args, finished) {


  var documentName = "RAdb"; // should come in as arg and come out of here
  var docSubName = "users";     // should come in as arg and come out of here
  var id = 35;//;args.id;
  var id = args.id;

  console.log("args are" + args);
  console.log(args);
  console.log(args.id);
  console.log("end of args");


//(typeof id === 'undefined') || (id === '')

    if ((id == 66) || (id === '') || (typeof id === 'undefined'))  {
      console.log("hit 66");
      let doc = this.db.use(documentName, docSubName);  
      docout = doc.getDocument(true);
      docArr = Object.values(docout);
      return finished(docArr);
      //return doc.getDocument(true);
    }
    else if (id == 35)
    {
     return finished({ok: true}); 
    }
    else
    {
    let doc = this.db.use(documentName, docSubName, id);
    return finished(doc.getDocument(true));

    }

  
  }