learn_answers = new Mongo.Collection('condition_c_6_answers');

learn_answer = new SimpleSchema({
	name:{
		type:String,
		label:"name"
	},
	initial_time:{
		type:Number,
		label:"initial_time"
	},
	initial_answer:{
		type:String,
		label:"initial_answer"
	},
	time1:{
		type:Number,
		label:"time1"
	},
	answer1:{
		type: String,
		label:"answer1"
	},
	time2:{
		type:Number,
		label:"time2"
	},
	answer2:{
		type: String,
		label:"answer2"
	},
	time3:{
		type:Number,
		label:"time3"
	},
	answer3:{
		type: String,
		label:"answer3"
	},
	time4:{
		type:Number,
		label:"time4"
	},
	answer5:{
		type: String,
		label:"answer5"
	},
	time6:{
		type:Number,
		label:"time6"
	},
	answer6:{
		type: String,
		label:"answer6"
	},
	final_time:{
		type:Number,
		label:"final_time"
	},
	final_answer:{
		type: String,
		label:"final_answer"
	}
});


// learn_answers.attachSchema(learn_answer);