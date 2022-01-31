let startDate = -1;
let endDate = -1;
const calendarButtons = document.querySelectorAll('.date-btn');
calendarButtons.forEach((btn) => btn.addEventListener('click', handleClick));
calendarButtons.forEach((btn) => btn.addEventListener('mouseover', styleforward));

function handleClick(e) {
  console.log(e.target);
  const current = Number(e.target.textContent);

  if (startDate === -1) {
    startDate = current;
    e.target.classList.add('start-date');
    return;
  }

  //check if theres a start date and selected date is not less than start date
  if (startDate > 0 && current > startDate) {
    endDate = current;
    const currentEnd = document.querySelector('.end-date');
    if (currentEnd) {
      currentEnd.classList.remove('end-date');
    }
    e.target.classList.add('end-date');
    return;
  }

  //check if theres a start date and selected date is LESS than start date
  if (startDate > 0 && current < startDate) {
    const currentStart = document.querySelector('.start-date');
    currentStart.classList.remove('start-date');
    startDate = current;
    e.target.classList.add('start-date');
    return;
  }
}

function styleforward(e) {
  calendarButtons.forEach((btn) => btn.classList.remove('between-dates'));
  if (startDate > 0) {
    for (let i = startDate; i < e.target.textContent; i++) {
      calendarButtons[i].classList.add('between-dates');
    }
  }
}
