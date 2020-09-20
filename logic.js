//$(document).ready(function() {
//==============Windy============================
const opts = {
    key: 'l89NU2nczduLb4zwodOBPiTmZXF1Elx9',
    verbose: true,
    lat: (35.93),
    lon: -85.46, //STN coordinates
    zoom: 8,
};

windyInit(opts, windyAPI => {

    const { map } = windyAPI; //.map is instance of Leaflet map

    console.log(windyAPI);

    L.popup()
        .setLatLng([35.93, -85.46])
        .setContent('Home')
        .openOn(map);
        
});

var map = L.map('windy').setView([51.505, -0.09], 13);
//});