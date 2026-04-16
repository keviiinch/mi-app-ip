const API_KEY = "e5f52f502f4743538e0a9096b8bae6ba";

export async function obtenerGeo(ip) {
    const res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${ip}`);
    return await res.json();
}