import GMaps from 'gmaps/gmaps.js';
import { styles } from '../components/style';

const mapElement = document.getElementById('map');
if (mapElement) {
  const map = new GMaps({ el: '#map', lat: 42, lng: 0 });
  map.addStyle({
    styles: styles,
    mapTypeId: 'map_style'
  });
  map.setStyle('map_style');
  const markers = JSON.parse(mapElement.dataset.markers);
  map.addMarkers(markers);

  let blocks = document.querySelectorAll('.block');
  blocks.forEach((block) => {
    block.addEventListener("click", (event) => {
      map.removeMarkers();
      let selectedMar = markers.filter(mark => mark.blockid === parseInt(block.id, 10));
      map.addMarkers(selectedMar);
      map.fitLatLngBounds(selectedMar);
    });
  });

  let events = document.querySelectorAll('.event');
  events.forEach((evt) => {
    evt.addEventListener("click", (event) => {
      map.removeMarkers();
      let selectedMar = markers.filter(mark => mark.blockid === parseInt(evt.getAttribute("block-id"), 10));
      map.addMarkers(selectedMar);
      let clickedEvt = markers.filter(mark => mark.eventid === parseInt(evt.getAttribute("evt-id"), 10));
      map.setCenter((clickedEvt[0].lat), (clickedEvt[0].lng - 3));
      map.setZoom(7);

      // console.log(evt.getAttribute("evt-id"));
    });
  });

  // if (markers.length === 0) {
  //   map.setZoom(3);
  // } else if (markers.length === 1) {
  //   map.setCenter((markers[0]), (markers[0].lng - 30);
  //   map.setZoom(3);
  // } else {
  //   map.fitLatLngBounds(markers);
  // }
}

