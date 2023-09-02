import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dataSelector = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
// const today = new Date();

startBtn.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const date = new Date(selectedDates);
    if (date.getTime() < options.defaultDate.getTime()) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
};

flatpickr(dataSelector, options);
