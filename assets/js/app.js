import { obtenerIP } from "./services/ipService.js";
import { obtenerGeo } from "./services/geoService.js";
import { Cliente } from "./models/Cliente.js";
import { mostrarDatos } from "./ui/ui.js";

async function iniciarApp() {
    try {
        const ip = await obtenerIP();
        const geo = await obtenerGeo(ip);

        const cliente = new Cliente(
            ip,
            geo.country_name,
            geo.city,
            navigator.userAgent,
            navigator.platform,
            navigator.language,
            screen.width,
            screen.height,
            geo.isp,
            Intl.DateTimeFormat().resolvedOptions().timeZone
        );

        mostrarDatos(cliente);

    } catch (error) {
        console.error("Error:", error);
        document.getElementById("datos").innerHTML = `
            <div class="text-center text-danger">
                Error al cargar los datos
            </div>
        `;
    }
}

iniciarApp();