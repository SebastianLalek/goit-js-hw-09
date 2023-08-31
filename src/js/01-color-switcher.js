const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = null;

const disableButton = btn => btn.setAttribute('disabled', '');
const activateButton = btn => btn.removeAttribute('disabled');

disableButton(stopBtn);

startBtn.addEventListener('click', () => {
  let backgroundColor = null;
  timerId = setInterval(() => {
    backgroundColor = getRandomHexColor();
    document.body.style.backgroundColor = backgroundColor;
  }, 1000);
  activateButton(stopBtn);
  disableButton(startBtn);
});

stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  activateButton(startBtn);
  disableButton(stopBtn);
});
