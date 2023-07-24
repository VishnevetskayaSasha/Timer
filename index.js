const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

//Напишите реализацию createTimerAnimator
//который будет анимировать timerEl
const createTimerAnimator = ( ) => {
  return (time) => {
    buttonEl.disabled = true;
    let startTimer = setInterval(function(){
      time--;

      let hours = Math.floor(time / 60 / 60); // Получаем часы
      let minutes = Math.floor(time / 60) - (hours * 60); // Получаем минуты
      let seconds = time % 60; // Получаем секунды
      let resultTimer = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      // если не хватает значений до двух, заполняет строку нулем
      console.log(resultTimer)
  
      timerEl.innerHTML = resultTimer;
  
      if (time <= 0) {
        clearInterval(startTimer); // останавливаем интервал
        alert("Время вышло");
        buttonEl.disabled = false;
      }
    }, 1000)
  }
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g, ''); 
  // replace - возвращает новую строку, где указанные значения (из регулярного выражения) заменяются на "".
});

buttonEl.addEventListener('click', () => {
  const time = Number(inputEl.value);

  animateTimer(time);

  inputEl.value = '';
});









