
function add(item) {
   var list = Session.get("list");
   list.push(item);
   Session.set("list",list)

}

if (Meteor.isClient) {
   Session.set("list",["one", "two"]);
   
  Template.list.items = function () {
   return Session.get("list");
  };

  Template.list.events({
     'keypress input': function(e,t){
      if(e.keyCode === 13){
        var input = t.find("input");
        add(input.value);
        input.value = "";
       }

     }
  
  });
}

