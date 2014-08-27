if (Meteor.isClient) {
 
  Template.emailForm.events({
    'click button': function (e, t) {
      var to     =t.find("#to").value,
          subject=t.find("#subject").value
          text   =t.find("#text").value

      Meteor.apply('sendEmail',[to, subject, text]);
    }
  });
}
 

if (Meteor.isServer) {
  Meteor.methods({
    sendEmail: function (to, subject, text) {
      Email.send({
        from: "admin@localhost.com",
        to: to,
        //cc, bcc, replyTo
        subject: subject,
        htm;: text
      });
    }
  });
}
//mail format is 
//MAIL_URL="smtp://USERNAME:PASSWORD@HOST:PORT" meteor