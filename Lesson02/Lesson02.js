if (Meteor.isClient) {


   Session.set("title","Element of Style");
   Session.set("author","Strunk & White");


  Template.book.title = function () {
   return Session.get("title");
  };

  Template.book.author = function () {
   return Session.get("author");
  }
}

