import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session'

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
	'click .confirm-button': function(event, instance) {
  	Session.set('name', $('#turkid').val());
  	Router.go('/initialTest'); 
  },
});

Template.initialTest.onCreated(function (){
	this.startTimer = new Date();
	console.log(this.startTimer.toString());
});

Template.initialTest.events({
	'click .confirm-button': function (event, template) {
		var endTimer = new Date();
		var staytime = endTimer - Template.instance().startTimer;
		console.log(endTimer.toString());
		console.log('You stay: ' + staytime/1000 +' seconds');

		Session.set('initial_time', staytime);
		Session.set('initial_answer', $('#transaction-content').val());
		Router.go('/transcribereceipt'); 
	}
});

Template.transcribereceipt.onCreated(function (){
	this.startTimer = new Date();
	console.log(this.startTimer.toString());
});

Template.transcribereceipt.onRendered(function (){
	$('.datepicker').datepicker();
});

Template.transcribereceipt.events({
	'click .confirm-button': function (event, template) {
		var endTimer = new Date();
		var staytime = endTimer - Template.instance().startTimer;
		console.log(endTimer.toString());
		console.log('You stay: ' + staytime/1000 +' seconds');

		Session.set('time1', staytime);
		Session.set('answer1', $('#storename').val()+';'+$('#address').val()+';'
			+$('#total').val()+';'+$('#idInput').val());
		Router.go('/transcribepicture'); 
	}
});

Template.transcribepicture.onCreated(function (){
	this.startTimer = new Date();
	console.log(this.startTimer.toString());
});

Template.transcribepicture.events({
	'click .confirm-button': function (event, template) {
		var endTimer = new Date();
		var staytime = endTimer - Template.instance().startTimer;
		console.log(endTimer.toString());
		console.log('You stay: ' + staytime/1000 +' seconds');

		Session.set('time2', staytime);
		Session.set('answer2', $('#transaction-content').val());
		Router.go('/collectfromweb'); 
	}
});

Template.collectfromweb.onCreated(function (){
	this.startTimer = new Date();
	console.log(this.startTimer.toString());
});

Template.collectfromweb.events({
	'click .confirm-button': function (event, template) {
		var endTimer = new Date();
		var staytime = endTimer - Template.instance().startTimer;
		console.log(endTimer.toString());
		console.log('You stay: ' + staytime/1000 +' seconds');

		Session.set('time1', staytime);
		Session.set('answer1', $('#storename').val()+';'+$('#category').val()+';'
			+$('#address').val()+';'+$('#phone').val());
		Router.go('/survey'); 
	}
});

Template.survey.onCreated(function (){
	this.startTimer = new Date();
	console.log(this.startTimer.toString());
});

Template.survey.events({
	'click .confirm-button': function (event, template) {
		var endTimer = new Date();
		var staytime = endTimer - Template.instance().startTimer;
		console.log(endTimer.toString());
		console.log('You stay: ' + staytime/1000 +' seconds');

		Session.set('time2', staytime);
		Session.set('answer2', "survey");
		Router.go('/collectfromY'); 
	}
});

Template.collectfromY.onCreated(function (){
	this.startTimer = new Date();
	console.log(this.startTimer.toString());
});

Template.collectfromY.events({
	'click .confirm-button': function (event, template) {
		var endTimer = new Date();
		var staytime = endTimer - Template.instance().startTimer;
		console.log(endTimer.toString());
		console.log('You stay: ' + staytime/1000 +' seconds');

		Session.set('time3', staytime);
		Session.set('answer3', $('#name').val()+';'+$('#email').val()+';'
			+$('#title').val());
		Router.go('/collectfromweb1'); 
	}
});

Template.collectfromweb1.onCreated(function (){
	this.startTimer = new Date();
	console.log(this.startTimer.toString());
});

Template.collectfromweb1.events({
	'click .confirm-button': function (event, template) {
		var endTimer = new Date();
		var staytime = endTimer - Template.instance().startTimer;
		console.log(endTimer.toString());
		console.log('You stay: ' + staytime/1000 +' seconds');

		Session.set('time4', staytime);
		Session.set('answer4', $('#storename').val()+';'+$('#category').val()+';'
			+$('#address').val()+';'+$('#phone').val());
		Router.go('/imageLabeling'); 
	}
});

Template.imageLabeling.onCreated(function (){
	this.startTimer = new Date();
	console.log(this.startTimer.toString());
});

Template.imageLabeling.events({
	'click .confirm-button': function (event, template) {
		var endTimer = new Date();
		var staytime = endTimer - Template.instance().startTimer;
		console.log(endTimer.toString());
		console.log('You stay: ' + staytime/1000 +' seconds');

		Session.set('time5', staytime);
		Session.set('answer5', $('#things').val()+"");
		Router.go('/findCD'); 
	}
});

Template.findCD.onCreated(function (){
	this.startTimer = new Date();
	console.log(this.startTimer.toString());
});


Template.findCD.events({
	'click .confirm-button': function (event, template) {
		var endTimer = new Date();
		var staytime = endTimer - Template.instance().startTimer;
		console.log(endTimer.toString());
		console.log('You stay: ' + staytime/1000 +' seconds');

		Session.set('time6', staytime);
		Session.set('answer6', $('#name').val() +';'+ $('#member').val() + ';' + $('#released').val());
		Router.go('/finalTest'); 
	}
});

Template.finalTest.onCreated(function (){
	this.startTimer = new Date();
	console.log(this.startTimer.toString());
});

Template.finalTest.events({
	'click .confirm-button': function (event, template) {
		var endTimer = new Date();
		var staytime = endTimer - Template.instance().startTimer;
		console.log(endTimer.toString());
		console.log('You stay: ' + staytime/1000 +' seconds');

		Session.set('final_time', staytime);
		Session.set('final_answer', $('#transaction-content').val());
		
		
		var newAnswer = {
			'name':Session.get('name'),
			'initial_time':Session.get('initial_time'),
			'initial_answer':Session.get('initial_answer'),
			'time1':Session.get('time1'),
			'answer1':Session.get('answer1'),
			'time2':Session.get('time2'),
			'answer2':Session.get('answer2'),
			'time3':Session.get('time3'),
			'answer3':Session.get('answer3'),
			'time4':Session.get('time4'),
			'answer4':Session.get('answer4'),
			'time5':Session.get('time5'),
			'answer5':Session.get('answer5'),
			'time6':Session.get('time6'),
			'answer6':Session.get('answer6'),
			'final_time':Session.get('final_time'),
			'final_answer':Session.get('final_answer'),
		}

		learn_answers.insert(newAnswer);

		if(!Session.get('name') || Session.get('name')==""){
			console.log(Session.get('name'));
			Session.set('name',"hardcode");
		}
		Meteor.call('code', Session.get('name'), function (error, result) {
			if(error){
				console.error("generate file error:"+error);
				return;
			}
			if(result && result.code){
				Session.set("code",result.code);
				Router.go('/finish',); 
		 	}else{
		 		console.error("Incorrect data returned from 'generateFile' method");
			}
		});
		
	}
});

Template.finish.onCreated(function(){
	this.code = new ReactiveVar(null);
});

Template.finish.helpers({
	random(){
		return Template.instance().code.get();
	}
});

Template.finish.onRendered(function(){
	Template.instance().code.set(Session.get('code'))
});

