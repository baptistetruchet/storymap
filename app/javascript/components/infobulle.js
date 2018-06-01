function getPreviousSiblings(el, filter) {
  var siblings = [];
  while (el = el.previousSibling) { if (!filter || filter(el)) siblings.push(el); }
  return siblings;
}

function getNextSiblings(el, filter) {
  var siblings = [];
  while (el= el.nextSibling) { if (!filter || filter(el)) siblings.push(el); }
  return siblings;
}

function flow() {
  let hist_events = document.querySelectorAll('.event');
  hist_events.forEach((hist_event) => {
    hist_event.addEventListener("click", (event) => {
      let previousSiblings = getPreviousSiblings(hist_event, false)
        previousSiblings.forEach((previousSibling) => {
          if (previousSibling.tagName === 'DIV') previousSibling.classList.add("opacity-none");
        });
      let nextSiblings = getNextSiblings(hist_event, false)
        nextSiblings.forEach((nextSibling) => {
          if (nextSibling.tagName === 'DIV') nextSibling.classList.remove("opacity-none");
        });
      hist_event.className += " opacity-none";
    });
  });
}

function nextBlock() {
  let timelines = document.querySelectorAll('#timeline');
  let last_pins = document.querySelectorAll('.end');
  last_pins.forEach((last_pin) => {
    timelines.forEach((timeline) => {
      if (timeline.className != "hidden-timeline") {
        last_pin.addEventListener("click", (event) => {
          let blocks = document.querySelectorAll('.block');
          var selected_block = undefined;
          blocks.forEach((block) => {
            if (parseInt(block.dataset.index) === 1) {
              selected_block = block;
            }
          });
          console.log(selected_block);
          selected_block.click();
        });
      }
    });
  });
}

export { flow, nextBlock };
