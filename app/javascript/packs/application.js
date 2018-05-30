import "popper.js";
import "bootstrap";

import { drag } from '../components/drag.js';
import { rolling } from '../components/sidebar';
import { flow } from '../components/timeline';

const blocksList = document.getElementById('blocks-list');
if (blocksList) {drag()}

$(window, document, undefined).ready(function() {

const sidebar = document.getElementById('wrapper-blocks');
if (sidebar) {
  rolling();
}

const timeline = document.getElementById('timeline');
if (timeline) {
  flow();
}

