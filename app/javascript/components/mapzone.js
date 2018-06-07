function initializemapzone() {
  // Map Center
  var myLatLng = new google.maps.LatLng(52.2296756, 21.0122287);
  // General Options
  var mapOptions = {
    zoom: 5,
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.RoadMap
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
  // Polygon Coordinates
  var triangleCoords = [
    new google.maps.LatLng(54.585, 21.93789),
    new google.maps.LatLng(51.01117, 18.93382),
    new google.maps.LatLng(50.45947, 24.57221)
  ];

  // Styling & Controls
  var myPolygon = new google.maps.Polygon({
    paths: triangleCoords,
    draggable: true, // turn off if it gets annoying
    editable: true,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });

  myPolygon.setMap(map);
  //google.maps.event.addListener(myPolygon, "dragend", getPolygonCoords);
  google.maps.event.addListener(myPolygon.getPath(), "insert_at", getPolygonCoords);
  //google.maps.event.addListener(myPolygon.getPath(), "remove_at", getPolygonCoords);
  google.maps.event.addListener(myPolygon.getPath(), "set_at", getPolygonCoords);


  //Display Coordinates below map
  function getPolygonCoords() {
    var len = myPolygon.getPath().getLength();
    var htmlStr = "";
    for (var i = 0; i < len; i++) {
      var coor = myPolygon.getPath().getAt(i).toUrlValue(5).split(',');
      htmlStr += "[" + coor[1] + "," + coor[0] + "],";
    }
    htmlStr = htmlStr.slice(0, -1);
    htmlStr = `{"type":"Polygon","coordinates":[[` + htmlStr + `]]}`;
    var form_coordinates = document.getElementById('zone_coordinates');
    form_coordinates.value = htmlStr;
  }
  // function copyToClipboard(text) {
  //   window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
  // }
}

export { initializemapzone }
