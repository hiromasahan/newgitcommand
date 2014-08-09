if (Meteor.isClient) {


  Template.staff.people = [
     {  fullName: "John Doe", job: "CEO"  },
     {  fullName: "Jane Smith", job: "CTO"  },
     {  fullName: "Sophie Turner", job: "Developer"  },
     {  fullName: "Jack Lewis", job: "Designer"  },
  ];


  Template.person.executive = fuction () {
     return !!this.job.match(/^C.*O$/);

  };
}
  
