export function mostrarDatos(cliente) {
    const contenedor = document.getElementById("datos");

    const datos = [
        ["IP Pública", cliente.ip],
        ["País", cliente.pais],
        ["Ciudad", cliente.ciudad],
        ["Navegador", cliente.navegador],
        ["Sistema Operativo", cliente.so],
        ["Idioma", cliente.idioma],
        ["Resolución", `${cliente.ancho}x${cliente.alto}`],
        ["ISP", cliente.isp],
        ["Zona Horaria", cliente.zonaHoraria],
        ["User Agent", cliente.navegador]
    ];

    contenedor.innerHTML = datos.map(d => `
        <div class="col-md-4 dato">
            <div class="card p-3 shadow-sm">
                <strong>${d[0]}</strong>
                <p class="mb-0">${d[1]}</p>
            </div>
        </div>
    `).join("");
}