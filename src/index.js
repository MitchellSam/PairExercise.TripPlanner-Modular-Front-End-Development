console.log("did this run?")

const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoibXNhbTQ3OCIsImEiOiJjam9nN2lkaXQwNjNlM3ZtZ2xodHQwYTEyIn0.q8G9vxAjyzBfBZ6LLtLrOg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// var marker1 = new mapboxgl.Marker()
//     .setLngLat([-74.009151, 40.705086])
//     .addTo(map)

// var marker2 = new mapboxgl.Marker()
//     .setLngLat([-87.641, 41.895])
//     .addTo(map)

// const markerDomEl = document.createElement("div"); // Create a new, detached DIV
// markerDomEl.style.width = "32px";
// markerDomEl.style.height = "39px";
// markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago

const buildMarker = require("./marker");

const marker = buildMarker("activities", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);
