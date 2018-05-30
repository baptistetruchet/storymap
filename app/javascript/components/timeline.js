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

export { flow };




      // let timeline = Array.from(hist_event.parentNode.children);
      // let position = timeline.indexOf(hist_event);
      // console.log(position);
