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

  if (markers.length === 0) {
    map.setZoom(3);
  } else if (markers.length === 1) {
    map.setCenter((markers[0]), markers[0].lng);
    map.setZoom(3);
  } else {
    map.fitLatLngBounds(markers);
  }
}

