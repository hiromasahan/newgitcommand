var Items = new Meteor.Collection("Items");

if (Meteor.isClient) {
  Meteor.subscribe("items");

  Template.items.items = function (){
    return Items.find();
    };
  
}

if (Meteor.isServer) {
  Meteor.publish("items", function() {
    return Items.find();
  });
}
