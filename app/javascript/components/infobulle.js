function setEventVisibility(eventid) {
  let events = document.querySelectorAll('.infobulle');
  events.forEach((event) => {
    let block_id = timeline.getAttribute("block-id");
    if (parseInt(block_id, 10) === position) {
      timeline.classList.remove("hidden-timeline");
    } else {
      timeline.classList.add("hidden-timeline");
    }
  });
}

export { setEventVisibility };
