import GMaps from 'gmaps/gmaps.js';
import { styles } from '../components/style';
import { autocomplete } from '../components/autocomplete';


const mapElement = document.getElementById('map');
if (mapElement) {
  const map = new GMaps({ el: '#map', lat: 42, lng: 0, disableDefaultUI: true });
  map.addStyle({
    styles: styles,
    mapTypeId: 'map_style'
  });
  map.setStyle('map_style');
  const markers = JSON.parse(mapElement.dataset.markers);
  const zones = JSON.parse(mapElement.dataset.zones);
  var zones_drawn = [];
  addMarkersMaps(markers);
  map.setZoom(2);
  let blocks = document.querySelectorAll('.block');
  blocks.forEach((block) => {
    block.addEventListener("click", (event) => {
      map.removeMarkers();
      zones_drawn.forEach((drawing) => {drawing.setMap(null);})
      if (parseInt(block.id, 10) == 0) {
        markers.forEach(function(mark) {
          mark.opacity = 1;
        });
        addMarkersMaps(markers);
        if (selectedMar.length === 1) {
          map.fitLatLngBounds(selectedMar);
          map.setZoom(6);
        } else {
          map.fitLatLngBounds(selectedMar);
        }
      } else {
        let selectedMar = markers.filter(mark => mark.blockid === parseInt(block.id, 10));
        selectedMar.forEach(function(mark) {
          mark.opacity = 1;
        });
        addMarkersMaps(selectedMar);
        if (selectedMar.length === 1) {
          map.fitLatLngBounds(selectedMar);
          map.setZoom(6);
        } else {
          map.fitLatLngBounds(selectedMar);
        }
      }
    });
  });

  let events = document.querySelectorAll('.event');
  events.forEach((evt) => {
    evt.addEventListener("click", (event) => {
      map.removeMarkers();
      zones_drawn.forEach((drawing) => {drawing.setMap(null);})
      const eventZones = zones.filter(zone => zone.evtid === parseInt(evt.getAttribute("evt-id"), 10));
      eventZones.forEach((zone) => {addZone(zone.zone, zone.zonecolor, zone.zonecoord);});
      let selectedMar = markers.filter(mark => mark.blockid === parseInt(evt.getAttribute("block-id"), 10));
      let clickedEvt = markers.filter(mark => mark.eventid === parseInt(evt.getAttribute("evt-id"), 10));
      selectedMar.forEach(function(mark) {
        mark.opacity = 0.4;
      });
      clickedEvt[0].opacity = 1;
      addMarkersMaps(selectedMar);
      let totalLng = Math.abs(map.getBounds().b.f - map.getBounds().b.b);
      let clickedEvtDecal = clickedEvt
      clickedEvtDecal[0].lng = clickedEvt[0].lng - (totalLng/4)
      map.panTo(clickedEvtDecal[0]);
      clickedEvtDecal[0].lng = clickedEvt[0].lng + (totalLng/4)
    });
  });

  if (markers.length === 0) {
    map.setZoom(3);
  }


  function addZone(country, color, coordins) {
    var coords= JSON.parse(coordins);
    var coord = (coords.type == "Polygon") ? [coords.coordinates] : coords.coordinates;
    coord.forEach(function(array1) {
      var myCoordinates = [];
      array1[0].forEach(function(ll) {
        myCoordinates.push(new google.maps.LatLng(ll[1],ll[0]));
      });
      zones_drawn.push(map.drawPolygon({
          paths: myCoordinates, // pre-defined polygon shape
          strokeColor: color,
          strokeOpacity: 1,
          strokeWeight: 3,
          fillColor: color,
          fillOpacity: 0.6
        }));
    });
  }


  function addMarkersMaps(markers) {
    markers.forEach((marker) => {
      const mapMarker = map.createMarker(marker);
      mapMarker.addListener('click', function() {
        $(`[evt-id=${marker.eventid}]`).click();
      });
      map.addMarker(mapMarker);
    });
  }
}



autocomplete();
