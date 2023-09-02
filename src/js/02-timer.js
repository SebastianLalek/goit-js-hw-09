import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dataSelector = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysLeft = document.querySelector('[data-days]');
const hoursLeft = document.querySelector('[data-hours]');
const minutesLeft = document.querySelector('[data-minutes]');
const secondsLeft = document.querySelector('[data-seconds]');

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  const targetLength = 2;
  if (typeof value !== 'string') {
    value = value.toString();
  }
  if (value.length < targetLength) {
    value = value.padStart(targetLength, '0');
  }
  return value;
}

let deadlineMs = new Date();

startBtn.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    deadlineMs = new Date(selectedDates).getTime();
    if (deadlineMs < new Date().getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
};

flatpickr(dataSelector, options);

function counter() {
  const timeLeft = deadlineMs - new Date().getTime();

  if (timeLeft > 0) {
    const { days, hours, minutes, seconds } = convertMs(timeLeft);
    daysLeft.textContent = addLeadingZero(days);
    hoursLeft.textContent = addLeadingZero(hours);
    minutesLeft.textContent = addLeadingZero(minutes);
    secondsLeft.textContent = addLeadingZero(seconds);
  } else {
    clearInterval(startCounter);
  }
}

function startCounter() {
  setInterval(counter, 1000);
}

startBtn.addEventListener('click', startCounter);
