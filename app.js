// =========================
// ESPECTADORES
// =========================

async function actualizarEspectadores() {

    try {

        const respuesta = await fetch("/api/viewers");
        const datos = await respuesta.json();

        document.getElementById("twitchViewers").textContent = datos.viewers;

        const estado = document.getElementById("liveStatus");

        if (datos.live) {

            estado.innerHTML = "🔴 EN VIVO";
            estado.style.background = "#ff0000";

        } else {

            estado.innerHTML = "⚫ OFFLINE";
            estado.style.background = "#555";

        }

    } catch (e) {

        console.log("No se pudieron obtener los espectadores");

    }

}

actualizarEspectadores();
setInterval(actualizarEspectadores, 30000);
