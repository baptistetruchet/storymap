import "popper.js";
import "bootstrap";

import { drag } from '../components/drag.js';
import { rolling } from '../components/sidebar';
import { flow, nextBlock } from '../components/timeline';

let blocksList = document.getElementById('blocks-list');
if (blocksList) {drag()}

const sidebar = document.getElementById('wrapper-blocks');
if (sidebar) {
  rolling();
}

const timeline = document.getElementById('timeline');
if (timeline) {
  flow();
  nextBlock();
}
