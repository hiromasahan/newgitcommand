if (Meteor.isClient) {


   Session.set("list",["one", "two"]);
   
  Template.list.items = function () {
   return Session.get("list");
  };
}

