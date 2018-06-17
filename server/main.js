import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

  // code to run on server at startup
  Meteor.methods({
  	'code': function (name) {
  		Future = Npm.require('fibers/future');
  		var fut = new Future();
  		console.log(SHA256(name));

  		fut.return({code:SHA256(name)});

  		return fut.wait();
  		
  	}
  });


});
