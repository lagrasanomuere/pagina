const express = require("express");
const path = require("path");
const getTwitchData = require("./twitch");

const app = express();

// Servir la página web
app.use(express.static(path.join(__dirname, "..")));

app.get("/api/viewers", async (req, res) => {

    const twitch = await getTwitchData();

    res.json({
        viewers: twitch.viewers,
        live: twitch.live
    });

});

app.listen(3000, () => {
    console.log("Servidor iniciado");
});
