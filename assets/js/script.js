const ipElement = document.getElementById("ip");
const btn = document.getElementById("btnActualizar");

async function obtenerIP() {
    ipElement.textContent = "Cargando...";

    try {
        const response = await fetch("https://api.ipify.org?format=json");

        if (!response.ok) {
            throw new Error("Error en la respuesta");
        }

        const data = await response.json();
        ipElement.textContent = data.ip;

    } catch (error) {
        ipElement.textContent = "Error al obtener la IP";
        console.error("Error:", error);
    }
}

btn.addEventListener("click", obtenerIP);

obtenerIP();