Router.configure({
  layoutTemplate: 'layout' 
});

Router.route('/video', function () {
  this.render('video_home');
});

Router.route('/video/:_id/:video_title', function () {
  var params = this.params; // { _id: "5" }
  var id = params._id; // "5"
  var video_title = params.video_title;
  this.render('video_home')
});


