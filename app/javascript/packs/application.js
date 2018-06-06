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

import { edit } from '../components/edit';
const editDiv = document.querySelector('.story-edit-div');
if (editDiv) { edit(); }

import { closeInfobulle } from '../components/infobulle';
const infobulle = document.querySelector('.infobulle');
if (infobulle) { closeInfobulle(); }

import { initializemapzone } from '../components/mapzone';
const mapcanvas = document.querySelector('#map-canvas');
if (mapcanvas) { initializemapzone(); }

