// IMPORT
import { Carousel1 } from './components/carusel/carouselLearn.js';
import { Interface } from './components/carusel/interfase.js';
import { renderTimer } from './components/timer/timer.js';
import { wahtYouLearnData } from './data/wahtYouLearnData.js';

// header import start
import { header } from './components/header/Header.js';
header();
addEventListener('click', () => {
})

// header import end

// hero import start
// hero import end

// counter import start
renderTimer('#content', '06-13 00:00:00')
// counter import end

// what-you-learn import start
new Carousel1('#corouselLearn', Interface, wahtYouLearnData)
// what-you-learn import end

// syllabus import start
// syllabus import end

// benefit import start
// benefit import end

// reviews import start
// reviews import end

// enrol form import start
import { progressLine } from './components/enrol-form/enrolForm.js';
progressLine();
// enrol form import end

// EXECUTION

// header execution start
// header execution end

// hero execution start
// hero execution end

// counter execution start
// counter execution end

// what-you-learn execution start
// what-you-learn execution end

// syllabus execution start
// syllabus execution end

// benefit execution start
// benefit execution end

// reviews execution start
// reviews execution end

// enrol form execution start
// enrol form execution end