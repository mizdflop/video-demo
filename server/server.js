var videos_array = [
	{
		video_title: "My First Pats Video",
		dek: "This is the first Pats video. It's entirely awesome. So awesome I almost can't stand it.",
		section: "sports",
		timestamp: 1,
		youtubeId: "z8IZste6zQ0"
	},
	{
		video_title: "The Second Pats Video",
		dek: "This second Pats video is much better than the first. Way, way better. It's great.",
		section: "sports",
		timestamp: 2,
		youtubeId: "Q5IN2LPT85o"
	},
	{
		video_title: "An Older Pats Video",
		dek: "One wonders why this would even be here. It doesn't seem necessary given what happened this week.",
		section: "sports",
		timestamp: 3,
		youtubeId: "OCJ_bZt7r5E"
	},	
	{
		video_title: "Video Pats 4",
		dek: "This Fourth Video was crated to make us lots of money by showing Tom Brady eating raw chicken, which is unhealthy",
		section: "sports",
		timestamp: 4,
		youtubeId: "LjR7UhbTZkE"
	},
	{
		video_title: "Big News About Pigs",
		dek: "This is the first news video. It is about cartoon characters from England",
		section: "news",
		timestamp: 5,
		youtubeId: "4mehM6oqjX8"
	},
	{
		video_title: "More Big News: Dogs Bark",
		dek: "This second new article is way, way more interesting than the first. That's what I'm saying",
		section: "news",
		timestamp: 6,
		youtubeId: "OYhl5iX_5Sk"
	},

]; 

Meteor.startup(function () {
if (Videos.find().count() === 0) {
  _.each( videos_array, function(one_video){
  	Videos.insert(one_video);
  });
}
});
