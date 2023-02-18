const question = document.querySelectorAll('.question');
const description = document.querySelectorAll('.description');
const arrowDown = document.querySelectorAll('.arrow-down');

// Action when question text down icon clicked
for (let i = 0; i < question.length; i++) {
  question[i].addEventListener('click', function () {
    arrowDown[i].classList.toggle('rotate');
    question[i].classList.toggle('weight');
    description[i].classList.toggle('hidden');
  });
}

// Action when arrow down icon clicked
for (let i = 0; i < arrowDown.length; i++) {
  arrowDown[i].addEventListener('click', function () {
    arrowDown[i].classList.toggle('rotate');
    question[i].classList.toggle('weight');
    description[i].classList.toggle('hidden');
  });
}
