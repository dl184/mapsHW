const app = function(){


  let coords = [47.497912, 19.040235]
  let coords2 = [47.500312, 19.084027]
  let zoom = 10
  let containerID = "main-map";
  let nyCoords = [40.712775, 74.005973]

  const mainMap = new MapWrapper(containerID, coords, zoom);
  mainMap.addMarker(coords);
  // mainMap.addMarker(coords2);
  // mainMap.addMarker();


  var button = document.querySelector('button');
  button.addEventListener('click', function()){
    mainMap.moveTo(nyCoords);
  });
}


window.addEventListener('DOMContentLoaded', app);
