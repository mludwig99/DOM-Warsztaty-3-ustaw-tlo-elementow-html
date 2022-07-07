console.log("Zadanie nr 3-ustaw-kolor-tła")





const setBcg = () => {

  let paragrafFirst = document.querySelector('.first');
  let paragrafSecond = document.querySelector('.second');

  // paragrafFirst.classList.toggle('bg-red');
  // paragrafSecond.classList.toggle('bg-yellow');

  paragrafFirst.classList.add('bg-yellow');
  paragrafSecond.classList.add('bg-red');

  // paragrafFirst.style.backgroundColor = 'red';
  // paragrafSecond.style.backgroundColor = 'yellow';
}

let btn = document.getElementById('setColor');

btn.addEventListener('click', setBcg);