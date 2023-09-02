import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    const value = { position, delay };

    setTimeout(() => {
      if (shouldResolve) {
        resolve(value);
      } else {
        reject(value);
      }
    }, delay);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const firstDelay = parseInt(form.elements.delay.value);
  const delayStep = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);

  let delay = firstDelay;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay = delay + delayStep;
  }
});
