 var People = new Meteor.Collection("people");

 if (Meteor.isClient) {
  Template.personList.people = function () {
    return People.find();
  };

  Template.personForm.events({
    'click button': function (e, t) {
      var el = t.find("#name");
      People.insert({name: el.value});
      el.value = "";
    }
  });
}

