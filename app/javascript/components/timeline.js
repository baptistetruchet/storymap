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

function hideAllInfobulles() {
  let infobulle = document.querySelector('.show-infobulle');
  if (infobulle) {infobulle.classList.remove("show-infobulle")};
}

function setInfobulleVisibility(eventid) {
  hideAllInfobulles()
  let infobulle = document.getElementById(`infobulle-${eventid}`);
  infobulle.classList.add("show-infobulle");
}

function removePicTimeline(eventid) {
    let picInfobulle = document.getElementById(`pic-timeline-${eventid}`);
    picInfobulle.style.opacity = 0;
    setTimeout(function(){
      picInfobulle.style.opacity = 1;
     }, 8000);
}

function flow() {
  let hist_events = document.querySelectorAll('.event');
  hist_events.forEach((hist_event) => {
    hist_event.addEventListener("click", (event) => {
      setInfobulleVisibility(hist_event.getAttribute('evt-id'));
      removePicTimeline(hist_event.getAttribute('evt-id'));
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
  let last_pins = document.querySelectorAll('.event-end');
  last_pins.forEach((last_pin) => {
    timelines.forEach((timeline) => {
      if (timeline.className != "hidden-timeline") {
        last_pin.addEventListener("click", (event) => {
          hideAllInfobulles();
          let blocks = document.querySelectorAll('.block');
          var selected_block = undefined;
          blocks.forEach((block) => {
            if (parseInt(block.dataset.index) === 1) {
              selected_block = block;
            }
          });
          selected_block.click();
        });
      }
    });
  });
}


function navigateBlocks(event) {

  if(event.key === "ArrowUp"){
    if(document.querySelector('.block[data-index = "-1"]')){
      let previous_block = document.querySelector('.block[data-index = "-1"]');
      previous_block.click();
    }
  }

  if(event.key === "ArrowDown"){
    if(document.querySelector('.block[data-index = "1"]')){
      let next_block = document.querySelector('.block[data-index = "1"]');
      next_block.click();
    }
  }
}

function initNavigation() {
  window.addEventListener("keyup", navigateBlocks);
}


export { flow, nextBlock, hideAllInfobulles, initNavigation };


