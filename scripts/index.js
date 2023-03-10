/** Расположить слова по кругу */
function rotateMain(value) {
  const circleText = document.querySelectorAll(".circle__text");
  deg = 0;
  for (let item of circleText) {
    item.style.transform = `rotate(${deg}deg)`;
    deg += value;
  }
  return value;
}

rotateMain(40);

/** Расположить буквы по кругу */
function rotateLetters(value) {
  const circleLetters = document.querySelectorAll(".circle__letter");
  deg = 0;
  for (let item of circleLetters) {
    item.style.transform = `rotate(${deg}deg)`;
    deg += value;
  }
  return value;
}

rotateLetters(30);
