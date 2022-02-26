
//Load youtube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//Create youtube iFrame
var player;
function onYouTubeIframeAPIReady()
{
    player = new YT.Player('YBplayerSS', {
            height: '390',
            width: '640',
            videoId: 'hTWKbfoikeg',
            playerVars: {
                'playsinline': 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
}

function onPlayerReady(event)
{
    console.log("onPlayerReady");
}

function onPlayerStateChange(event)
{
    console.log("onStateChange");
}

function play_video()
{
    var videoID = document.getElementById("video_ID");
}