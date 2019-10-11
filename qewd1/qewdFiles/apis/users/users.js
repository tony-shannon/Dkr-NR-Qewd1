
module.exports = function(documentName, docSubName, body, PostedId) {



var doc = this.db.use(documentName, docSubName);
var id = PostedId; //doc.increment();  // not using the counter in YDB, which will go on anyway
doc.$(id).setDocument(body);
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
return {
  ok: true,
  id: id
};

}