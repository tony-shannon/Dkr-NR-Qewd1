
module.exports = function(args, finished) {


   var documentName = "RAdb"; // should come in as arg and come out of here
   var docSubName = "users";     // should come in as arg and come out of here
  // var id = args.body.id;

   if ('body' in args.req)
   {
     var id = args.req.body.id;
     console.log ("Found Id;" +id )
   }
   else
   {
     console.log("no ID but here is arg.body" + args.req.body);
     console.log("here are the args" + args);
   }
   //var titleOfPost = args.req.body.title;
  // var bodyOfPost = args.req.body.body
  //var iDN = 3;

  //console.log("where will this end up?" + args.body.id + "whats back there?");
  console.log(args);
  console.log("EofArgs");

  // finished(test1.call(this, arx_documentName, arx_docSubName, args.req.body, args.req.body.id));
  //};
  //module.exports = function(documentName, docSubName, body, PostedId) {
    //var doc = this.db.use(documentName, docSubName);
    //var id = args.body.id; //PostedId; //doc.increment();  // not using the counter in YDB, which will go on anyway
    //doc.$(id).setDocument(args.body);

    return finished ({SetUserOK: true,
                      id: id});
    
}