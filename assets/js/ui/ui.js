export function mostrarDatos(cliente) {
    const contenedor = document.getElementById("datos");

    const datos = [
        ["IP Pública", cliente.ip, "bi-globe"],
        ["País", cliente.pais, "bi-flag"],
        ["Ciudad", cliente.ciudad, "bi-building"],
        ["Navegador", cliente.navegador, "bi-browser-chrome"],
        ["Sistema Operativo", cliente.so, "bi-windows"],
        ["Idioma", cliente.idioma, "bi-translate"],
        ["Resolución", `${cliente.ancho}x${cliente.alto}`, "bi-display"],
        ["ISP", cliente.isp, "bi-hdd-network"],
        ["Zona Horaria", cliente.zonaHoraria, "bi-clock"],
        ["User Agent", cliente.navegador, "bi-cpu"]
    ];

    contenedor.innerHTML = datos.map(d => `
        <div class="col-lg-3 col-md-6 col-sm-12">
            <div class="card-dashboard shadow">
                <div class="icono text-center">
                    <i class="bi ${d[2]}"></i>
                </div>
                <div class="text-center">
                    <div class="titulo">${d[0]}</div>
                    <div class="valor">${d[1]}</div>
                </div>
            </div>
        </div>
    `).join("");
}