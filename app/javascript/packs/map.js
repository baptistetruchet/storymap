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
  addMarkersMaps(markers);
  map.setZoom(2);
  let blocks = document.querySelectorAll('.block');
  blocks.forEach((block) => {
    block.addEventListener("click", (event) => {
      map.removeMarkers();
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
