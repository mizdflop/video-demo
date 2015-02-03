// YouTube API will call onYouTubeIframeAPIReady() when API ready.
// Make sure it's a global variable.

//images available at: http://img.youtube.com/vi/2cbxDPSB6tI/0.jpg
onYouTubeIframeAPIReady = function (videoId) {
    var changed = true;

    // New Video Player, the first argument is the id of the div.
    // Make sure it's a global variable.
    if(!videoId){
        videoId = "2cbxDPSB6tI";
        changed = false;
    }
    player = new YT.Player("player", {

        height: "630", 
        width: "1020", 

        // videoId is the "v" in URL (ex: http://www.youtube.com/watch?v=LdH1hSWGFGU, videoId = "LdH1hSWGFGU")
        videoId: videoId, 

        // Events like ready, state change, 
        events: {

            onReady: function (event) {

                // Play video when player ready.
                event.target.playVideo();
            },
            onStateChange: function(d){
                if(d.data==0){
                    console.log ("the video has ended.")
                }
            }

        }

    });
};

YT.load();