const raceForm = document.getElementById('raceForm');
const ageInput = document.getElementById('age');
const registeredEarlyInput = document.getElementById('registeredEarly');
const result = document.getElementById('result');
const themeToggle = document.getElementById('themeToggle');

raceForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const age = Number(ageInput.value);
  const registeredEarly = registeredEarlyInput.checked;

  let raceNumber = Math.floor(Math.random() * 1000);
  let message = '';

  if (age > 18 && registeredEarly) {
    raceNumber += 1000;
    message = `You will race at 9:30 am. Your number is ${raceNumber}.`;
  } else if (age > 18 && !registeredEarly) {
    message = `You will race at 11:00 am. Your numbers is ${raceNumber}.`;
  } else if (age < 18) {
    message = `You will race at 12:30 pm. Your number is ${raceNumber}.`;
  } else {
    message = 'Please see the registration desk.';
  }

  result.textContent = message;
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});
