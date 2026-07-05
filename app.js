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

const player = new Plyr('#video', {
    controls: [
        'play-large',
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'fullscreen'
    ]
});
// =========================
// ESPECTADORES
// =========================

async function actualizarEspectadores() {

    try {

        const respuesta = await fetch("https://ominous-yodel-g46j5x954jq9fx5x-3000.app.github.dev/api/viewers");

        const datos = await respuesta.json();

        document.getElementById("viewers").innerHTML =
            `🟢 ${datos.kick} | 🟣 ${datos.twitch}<br><b>Total: ${datos.total}</b>`;

    } catch (e) {

        console.log("No se pudieron obtener los espectadores");

    }

}

actualizarEspectadores();

setInterval(actualizarEspectadores, 30000);
