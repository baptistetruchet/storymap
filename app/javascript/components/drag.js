import Sortable from "sortablejs";

function drag() {
  console.log('I am a drag function')
  var el = document.getElementById('blocks-list');
  var sortable = Sortable.create(el);
}

export { drag }
