// ==========================================
// CONFIGURACIÓN
// ==========================================
const API_KEY = "e5f52f502f4743538e0a9096b8bae6ba";
const BASE_URL = "https://api.ipgeolocation.io/ipgeo";

// Lista de IPs para probar
const ipsDePrueba = [
    "8.8.8.8",         // Google DNS (USA)
    "1.1.1.1",         // Cloudflare
    "208.67.222.222", // OpenDNS
    "189.203.240.1",  // México (ejemplo)
    "200.68.128.1"    // Latinoamérica (ejemplo)
];

// ==========================================
// FUNCIÓN PARA CONSULTAR GEOLOCALIZACIÓN
// ==========================================
async function obtenerGeo(ip) {
    try {
        console.log(`\n🔍 Consultando IP: ${ip}`);

        const response = await fetch(`${BASE_URL}?apiKey=${API_KEY}&ip=${ip}`);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();

        console.log("✅ Resultado:");
        console.log({
            ip: data.ip,
            pais: data.country_name,
            ciudad: data.city,
            estado: data.state_prov,
            isp: data.isp,
            organizacion: data.organization,
            latitud: data.latitude,
            longitud: data.longitude
        });

    } catch (error) {
        console.error(`❌ Error al consultar la IP: ${ip}`);
        console.error(error.message);
    }
}

// ==========================================
// PRUEBAS CON VARIAS IPS
// ==========================================
async function ejecutarPruebas() {
    console.log("🚀 Iniciando pruebas de geolocalización...\n");

    for (const ip of ipsDePrueba) {
        await obtenerGeo(ip);
    }

    console.log("\n🏁 Pruebas finalizadas");
}

// Ejecutar automáticamente
ejecutarPruebas();