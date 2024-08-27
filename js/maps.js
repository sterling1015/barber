function initMap() {
    // Coordenadas de la ubicación de la barbería
    const barberiaUbicacion = { lat: 40.712776, lng: -74.005974 }; // Reemplaza con las coordenadas reales

    // Crear el mapa y centrarlo en la ubicación de la barbería
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: barberiaUbicacion,
    });

    // Añadir un marcador en la ubicación de la barbería
    const marker = new google.maps.Marker({
        position: barberiaUbicacion,
        map: map,
        title: "Barbería",
    });
}