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

  Template.person.editing = function (){
    return Session.get("edit-" + this._id);
  };

  Template.person.events({
    'click':function (e, t){
        Session.set("edit-" + t.data._id, true);
    }
  });
}

