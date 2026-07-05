const video = document.getElementById("video");

const videoSrc =
"http://127.0.0.1:8888/live/mistream/index.m3u8";

if(Hls.isSupported()){

const hls = new Hls({

lowLatencyMode:true

});

hls.loadSource(videoSrc);

hls.attachMedia(video);

hls.on(Hls.Events.MANIFEST_PARSED,function(){

video.play();

});

}

else if(video.canPlayType("application/vnd.apple.mpegurl")){

video.src=videoSrc;

video.play();

}
