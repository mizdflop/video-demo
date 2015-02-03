Template.video_home.events({
	'click .img-clickable': function(e){
		//console.log("foo");
		//console.log(this);
		e.preventDefault();
		Router.go("/video/" + this.youtubeId + "/" + this.video_title);
		player.loadVideoById(this.youtubeId, 5, "large");
	},
});

 Template.video_home.rendered = function() {
	 /*$('.my-slider').slick({
	      slidesToShow: 5,
		  slidesToScroll: 3,
		  centerMode: false,
		  infinite: false

	  });
*/
	 console.log('foo');
 };

 Template.video_home.helpers({
 	latestVideos: function(){
 		return Videos.find({}, {sort: {timestamp: 1}});
 	},
 	 latestSports: function(){
 		return Videos.find({section: "sports"}, {sort: {timestamp: 1}});
 	},
 	latestNews: function(){
 		return Videos.find({section: "news"}, {sort: {timestamp: 1}});
 	}


 });