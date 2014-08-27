if Meteor.isClient
  Template.hello.greeting = () ->
    "Welcome to myapp"
  

  Template.hello.events
    'click input' : () -> console.log "You pressed the button" if typeof console isnt 'undefined'
  
