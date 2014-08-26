if (Meteor.isClient) {
  Template.login.createAccount = function () {
    return Session.get("creatingAccount");
  };

  Template.login.events({
    'click #loginform':function(){
      Session.set('creatingAccount',false);
    },
    'click #accountform':function(){
      Session.set('creatingAccount',true);
    }
  });
}