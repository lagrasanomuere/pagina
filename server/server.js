const express = require("express");
const getKickData = require("./kick");
const getTwitchData = require("./twitch");

const app = express();

app.get("/", (req, res) => {
    res.send("Servidor funcionando correctamente");
});

app.get("/api/viewers", async (req, res) => {

    const kick = await getKickData();
    const twitch = await getTwitchData();

    res.json({
        kick: kick.viewers,
        twitch: twitch.viewers,
        total: kick.viewers + twitch.viewers,
        liveKick: kick.live,
        liveTwitch: twitch.live
    });

});

app.listen(3000, () => {
    console.log("Servidor iniciado");
});