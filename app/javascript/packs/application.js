import "bootstrap";
import { rolling } from '../components/sidebar';
import { flow } from '../components/timeline';

const sidebar = document.getElementById('wrapper-blocks');
if (sidebar) {
  rolling();
}

const timeline = document.getElementById('timeline');
if (timeline) {
  flow();
}
