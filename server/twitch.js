const axios = require("axios");

async function getTwitchData() {

    try {

        const usuario = "JugandorCriticonOficial";

        const url = `https://decapi.me/twitch/viewercount/${usuario}`;

        const respuesta = await axios.get(url);

        const texto = respuesta.data;

        if (texto.toLowerCase().includes("offline")) {
            return {
                live: false,
                viewers: 0
            };
        }

        return {
            live: true,
            viewers: parseInt(texto)
        };

    } catch (error) {

        return {
            live: false,
            viewers: 0
        };

    }

}

module.exports = getTwitchData;