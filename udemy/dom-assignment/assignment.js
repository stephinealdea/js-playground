const task = document.getElementById('task-1');

task.style.backgroundColor = 'black';
task.style.color = 'white';

const theHead = document.querySelector('head title');
theHead.textContent = 'Assignment - Solved!';

const docHead = document.head;
const docTitle2 = document.head.querySelector('title');

docTitle2.textContent = 'Assignment - Solved! 2';

const theHead2 = document.head;
theHead2.children[3].textContent = 'Assignment - Solved! 3';

const h1 = document.querySelector('h1');
h1.textContent = 'Assignment - Solved!';

const h1eL = document.getElementsByTagName('h1');
h1eL[0].textContent = 'Assignment - Solved! 2';