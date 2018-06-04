function hideAllInfobulles() {
  let infobulle = document.querySelector('.show-infobulle');
  if (infobulle) {infobulle.classList.remove("show-infobulle")};
}

function setTimelineVisibility(position) {
  let timelines = document.querySelectorAll('#timeline');
  timelines.forEach((timeline) => {
    let block_id = timeline.getAttribute("block-id");
    if (parseInt(block_id, 10) === position) {
      timeline.classList.remove("hidden-timeline");
    } else {
      timeline.classList.add("hidden-timeline");
    }
  });
}

function setDataAttribute(target) {
  let indexTarget = target.dataset.index;
  let blocks = document.querySelectorAll('.block');
  blocks.forEach((block) => {
    block.dataset.index -= indexTarget;
  });
}

function scrollTo(target) {
  let position = Array.from(target.parentNode.children).indexOf(target);
  let wrapper = document.getElementById('wrapper-blocks');
  wrapper.style.transform = `translate3d(0px, -${position * 40}px, 0px)`;
  setTimelineVisibility(position + 1);
}

function addListener(event) {
  hideAllInfobulles();
  setDataAttribute(event.currentTarget);
  setOpacity();
  scrollTo(event.currentTarget);
}

function setup() {
  let blocks = document.querySelectorAll('.block');
  blocks.forEach((block) => {
    block.addEventListener("click", (event) => {
      addListener(event);
    });
  });
}

function setOpacity() {
  let blocks = document.querySelectorAll('.block');
  blocks.forEach((block) => {
    let index = Math.abs(Number.parseInt(block.dataset.index, 10));
    block.style.opacity = -0.2 * index + 1;
  });
}

function rolling() {
  setOpacity();
  setup();
}

const sidebar = document.getElementById('wrapper-blocks');
if (sidebar) {
  window.onload = function clickOnFirstBlock() {
    let first_block = document.querySelector('.block');
    first_block.click();
  };
}

export { rolling };


