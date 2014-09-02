

if (Meteor.isClient) {
console.log("hello world")

  Template.staff.people = [
     {  fullName: "John Doe", job: "CEO"  },
     {  fullName: "Jane Smith", job: "CTO"  },
     {  fullName: "Sophie Turner", job: "Developer"  },
     {  fullName: "Jack Lewis", job: "Designer"  },
  ];


  Template.person.executive = function () {
     return !!this.job.match(/^C.*O$/);

  };
}
  if (Meteor.isServer) {
console.log("hello world")
}
  
