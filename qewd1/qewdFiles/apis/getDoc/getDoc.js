
module.exports = function(documentName, docSubName, id) {

var doc = this.db.use(documentName, docSubName, id);
 // if (!doc.exists) {
 //   return {error: 'No Document exists for that Id (' + id + ')'};
 // }
  return {
    dox: doc.getDocument(true),
    outcome: "success"
  }
//var doc = this.db.use(documentName, docSubName);
//var id = doc.increment();
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