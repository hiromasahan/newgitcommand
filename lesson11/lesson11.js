var Items = Meteor.Collection("items");

Items.allow({
  insert: function (userid, doc){
    return (userid && doc.owner === userid);
  },
  update:function(userId, docs, fields, modifier){
    return _.all(doc, function(doc){
      return doc.owner === userId;
    });
  },
  remove: function(userId, docs){
    return _.all(docs,function(doc){
      return doc.owner === userId;
    });
  }
});

Items.deny({
  update: function(userId, docs, fields, modifier){
    return (fields.indexOf("owner")> -1);
  }
})
