Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'hello'});
Router.route('/initialTest', {name: 'initialTest'});
Router.route('/transcribeAudio', {name: 'transcribeAudio'});
Router.route('/transcribeAudio2', {name: 'transcribeAudio2'});
Router.route('/transcribeAudio3', {name: 'transcribeAudio3'});
Router.route('/transcribepicture', {name: 'transcribepicture'});
Router.route('/transcribereceipt', {name: 'transcribereceipt'});
Router.route('/collectfromweb', {name: 'collectfromweb'});
Router.route('/collectfromweb1', {name: 'collectfromweb1'});
Router.route('/survey', {name: 'survey'});
Router.route('/collectfromY', {name: 'collectfromY'});
Router.route('/imageLabeling', {name: 'imageLabeling'});
Router.route('/findCD', {name: 'findCD'});
Router.route('/finalTest', {name: 'finalTest'});
Router.route('/finish', {name: 'finish'});