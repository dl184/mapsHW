const MapWrapper = function(container, coords, zoom){

  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")

  this.map = L.map(container).setView(coords, zoom).addLayer(osmLayer);
}

//   this.map.on("click", function(event){
//     console.log(event.latlng);
//     const markerCoords = [event.latlng, event.latlng.lng];
//     console.log(this);
//     this.addMarker(markerCoords);
//   }.bind(this))
// }

MapWrapper.prototype.addMarker = function (coords) {
  L.marker(coords).addTo(this.map);
};

MapWrapper.prototype.moveTo = function(coords){
  this.map.panTo(coords);
};
