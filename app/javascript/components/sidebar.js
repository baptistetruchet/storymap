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
  wrapper.style.transform = `translate3d(0px, -${position * 44.5}px, 0px)`;
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

function closeModal() {
  let btn_explore = document.querySelector('.btn-explore-modal');
  btn_explore.addEventListener("click",  (event) => {
    $('#exampleModal').modal('hide');
  });
}

function rolling() {
  setOpacity();
  setup();
  closeModal();
}

const sidebar = document.getElementById('wrapper-blocks');
if (sidebar) {
  window.onload = function clickOnFirstBlock() {
    let first_block = document.querySelector('.block');
    let modal_on_load = document.querySelector('.modal-show-onload');
    first_block.click();
    // $('#exampleModal').modal('show');
  };
}

export { rolling };


