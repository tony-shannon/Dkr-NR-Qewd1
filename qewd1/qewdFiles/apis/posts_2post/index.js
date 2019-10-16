
module.exports = function(args, finished) {


   var documentName = "RAdb"; // should come in as arg and come out of here
   var docSubName = "posts";     // should come in as arg and come out of here
   var userId = args.userid
   var titleOfPost = args.req.body.title;
   var bodyOfPost = args.req.body.body
   var arx_body = {
                    "userId": userId,
                    "id": 2,
                    "title": titleOfPost,
                    "body": bodyOfPost
                  }
      
  //var iDN = 3;

  console.log("where will this end up?" + args.userId + "whats back there?");
  console.log(args);
  console.log("EofArgs");

  // finished(test1.call(this, arx_documentName, arx_docSubName, args.req.body, args.req.body.id));
  //};
  //module.exports = function(documentName, docSubName, body, PostedId) {
    var doc = this.db.use(documentName, docSubName);
    var id = arx_body.id; //PostedId; //doc.increment();  // not using the counter in YDB, which will go on anyway
    doc.$(id).setDocument(arx_body);

    return finished ({ok: true});
    
}