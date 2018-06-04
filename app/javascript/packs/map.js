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
  map.addMarkers(markers);
  // seting up the very first zoom on the map
  // map.fitLatLngBounds(markers)
  map.setZoom(2);
  let blocks = document.querySelectorAll('.block');
  blocks.forEach((block) => {
    block.addEventListener("click", (event) => {
      map.removeMarkers();
      let selectedMar = markers.filter(mark => mark.blockid === parseInt(block.id, 10));
      selectedMar.forEach(function(mark) {
        mark.opacity = 1;
      });
      map.addMarkers(selectedMar);
      map.fitLatLngBounds(selectedMar);
    });
  });

  let events = document.querySelectorAll('.event');
  events.forEach((evt) => {
    evt.addEventListener("click", (event) => {
      map.removeMarkers();
      let selectedMar = markers.filter(mark => mark.blockid === parseInt(evt.getAttribute("block-id"), 10));
      // selectedMar[0].icon = 'https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/Google_Maps.png'
      let clickedEvt = markers.filter(mark => mark.eventid === parseInt(evt.getAttribute("evt-id"), 10));
      selectedMar.forEach(function(mark) {
        mark.opacity = 0.4;
      });
      clickedEvt[0].opacity = 1;
      map.addMarkers(selectedMar);
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
  // } else if (markers.length === 1) {
  //   map.setCenter((markers[0]), (markers[0].lng));
  //   map.setZoom(3);
  // } else {
  //   map.fitLatLngBounds(markers);
  // }
}

autocomplete();
