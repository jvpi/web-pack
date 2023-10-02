export default function () {
    getLocation()
    
}
function iniciarMap(lat,lng) {
    let cordenadas = {lat,lng}
    
    let contenedorMapa = document.getElementById('location')
    let map = new google.maps.Map(contenedorMapa,{
        zoom:18,
        center:cordenadas
    })
    let marker = new google.maps.Marker({
        position:cordenadas,
        map
    })
}
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    }
}
function showPosition(position) {
    iniciarMap(position.coords.latitude,position.coords.longitude)
}
