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

function getCurrentTimeline() {
  return Array.from(document.querySelectorAll('#timeline')).filter((timeline)=> !timeline.classList.contains('hidden-timeline'))[0];
}

function blockAllEvents() {
  document.querySelectorAll('.event-start').forEach(start => {
    start.addEventListener('click', () => {
      const current_block = document.querySelector('.block[data-index = "0"]');
      current_block.click();
      getCurrentTimeline().querySelectorAll('.event, .interval').forEach((el) => {
        el.classList.remove("opacity-none");
      })
    })
  })
}

function flow() {
  blockAllEvents();
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
      const previous_block = document.querySelector('.block[data-index = "-1"]');
      if (previous_block) {
        previous_block.click();
      }
    }
  }

  if(event.key === "ArrowDown"){
    if(document.querySelector('.block[data-index = "1"]')){
      const next_block = document.querySelector('.block[data-index = "1"]');
      if (next_block) {
        next_block.click();
      }
    }
  }
}

function initNavigation() {
  window.addEventListener("keyup", navigateBlocks);
}

function getCurrentEvent(){
  const current_timeline = getCurrentTimeline();
  if (current_timeline) {
    // return current_event
    return Array.from(current_timeline.querySelectorAll('.opacity-none')).slice(-1)[0];
  } else {
    return null;
    // if on overwiew
  }
}

function navigateEvents(event) {
  // current event has the highest id with opacity none
  const current_event = getCurrentEvent();
  if (current_event) {

    if (event.key === "ArrowLeft") {
      if (current_event.previousElementSibling) {
        const previous_event = current_event.previousElementSibling.previousElementSibling;
        previous_event.click();
      }
    }

    if (event.key === "ArrowRight") {
      const next_event = current_event.nextElementSibling.nextElementSibling;
      next_event.click();
    }
  }
}

function initNavigationEvents() {
  window.addEventListener("keyup", navigateEvents);
}

export { flow, nextBlock, hideAllInfobulles, initNavigation, initNavigationEvents };
