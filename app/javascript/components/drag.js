import Sortable from "sortablejs";

function drag() {
  var el = document.getElementById('blocks-list');
  var sortable = Sortable.create(el, {
    onEnd: function (/**Event*/evt) {
      var blockId = evt.item.id.slice(-2);
      var positionFin = evt.newIndex;
      var positionInit = evt.oldIndex;
      var itemEl = evt.item;  // dragged HTMLElement
      evt.to;    // target list
      evt.from;  // previous list
      evt.oldIndex;  // element's old index within old parent
      evt.newIndex;
      const url = `/blocks/${blockId}/update_position`;
      const token = document.querySelector('meta[name="csrf-token"]').content;
      fetch(url, {
        method: "PATCH",
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'X-CSRF-Token': token,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({positionFin: positionFin, positionInit: positionInit, blockId: blockId}),
        credentials: 'same-origin'
      });
    }

  });
}

export { drag };
