import "popper.js";
import "bootstrap";


import { drag } from '../components/drag.js';
let blocksList = document.getElementById('blocks-list');
if (blocksList) { drag(); }

import { rolling } from '../components/sidebar';
const sidebar = document.getElementById('wrapper-blocks');
if (sidebar) { rolling(); }

import { flow, nextBlock } from '../components/timeline';
const timeline = document.getElementById('timeline');
if (timeline) {
  flow();
  nextBlock();
}

import { toggleBlock } from '../components/toggle_block';
const editPage = document.querySelector('.story-edit-div');
if (editPage) { toggleBlock(); }

import { closeInfobulle } from '../components/infobulle';
const infobulle = document.querySelector('.infobulle');
if (infobulle) { closeInfobulle(); }
