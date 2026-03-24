const raceForm = document.getElementById('raceForm');
const ageInput = document.getElementById('age');
const registeredEarlyInput = document.getElementById('registeredEarly');
const result = document.getElementById('result');
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  document.body.classList.add('light');
}

raceForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const age = Number(ageInput.value);
  const registeredEarly = registeredEarlyInput.checked;

  let raceNumber = Math.floor(Math.random() * 1000);
  let message = '';

  if (age > 18 && registeredEarly) {
    raceNumber += 1000;
    message = `Your race starts at 9:30 AM. Your race number is ${raceNumber}.`;
  } else if (age > 18 && !registeredEarly) {
    message = `You're in the adult group. Your race start time is 11:00 AM. Your race number is ${raceNumber}. `;
  } else if (age < 18) {
    message = `You're in the youth group. Your race starts at 12:30 PM. Your race number is ${raceNumber}.`;
  } else {
    message = `You're exactly 18-please check in at the registration desk for your race time. `;
  }

  result.innerHTML = `
    <h2>Race Details</h2>
    <p>${message}</p>
  `;
});

const updateThemeButton = () => {
  const isLight = document.body.classList.contains('light');

  if (isLight) {
    themeToggle.textContent = '🌙';
    themeToggle.setAttribute('aria-pressed', 'true');
  } else {
    themeToggle.textContent = '☀️';
    themeToggle.setAttribute('aria-pressed', 'false');
  }
};

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');

  const isLight = document.body.classList.contains('light');

  if (isLight) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }

  updateThemeButton();
});

updateThemeButton();
