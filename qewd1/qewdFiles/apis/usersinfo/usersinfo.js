
module.exports = function(documentName, docSubName, id) {

  //if (typeof id === 'undefined' || id === '') {
  if (id == 66) {
    console.log("hit 66");
    let doc = this.db.use(documentName, docSubName);  
    docout = doc.getDocument(true);
    docArr = Object.values(docout);
    return docArr;
    //return doc.getDocument(true);
  }
  else if (id == 35)
  {
  //let doc = this.db.use(documentName, docSubName, id);
  // if (!doc.exists) {
 // return {error: 'No Document exists for that Id (' + id + ')'};
    return {ok: true}  
  }
  else
  {
  let doc = this.db.use(documentName, docSubName, id);
  return doc.getDocument(true);
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