var db_post = require('./post');

module.exports = function(args, finished) {
  finished(db_post.call(this, 'Documents', args.documentName, args.req.body));
};


/// to be moved to ./post.js file

var traverse = require('traverse');

function isEmptyObject(obj) {
  for (var prop in obj) {
    return false;
  }
  return true;
}

function isInt(value) {
  return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}

module.exports = function(documentName, docSubName, body) {

  if (typeof docSubName === 'undefined' || docSubName === '') {
    return {error: 'Document name not defined or empty'};
  }
  if (typeof body === 'undefined' || body === '' || isEmptyObject(body)) {
    return {error: 'Document Content (body) not defined or empty'};
  }
  var doc = this.db.use(documentName, docSubName);
  var id = doc.increment();
  doc.$(id).setDocument(body);
  // create indices
  var docIndex = this.db.use(documentName + 'Index', docSubName);
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
  return {
    ok: true,
    id: id
  };
};