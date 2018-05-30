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
}

function addListener(event) {
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

export { rolling };
