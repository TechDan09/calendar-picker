/**
 * handles calendar dates/buttons clicks
 * @param {DOM Event Object} e
 * @returns void
 */
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

    //remove pre existing end date if available
    if (currentEnd) {
      currentEnd.classList.remove('end-date');
    }

    e.target.classList.add('end-date');
    styleInbetween(startDate, endDate);

    return;
  }

  //check if theres a start date and selected date is LESS than start date
  if (startDate > 0 && current < startDate) {
    const currentStart = document.querySelector('.start-date');
    currentStart.classList.remove('start-date');

    startDate = current;

    e.target.classList.add('start-date');
    styleInbetween(startDate, endDate);

    return;
  }
}

/**
 * hover effect only when end date isnt set
 * @param {DOM Event Object} e
 */
function handleHover(e) {
  if (endDate === -1) {
    calendarButtons.forEach((btn) => btn.classList.remove('between-dates'));

    if (startDate > 0) {
      for (let i = startDate; i < e.target.textContent; i++) {
        calendarButtons[i].classList.add('between-dates');
      }
    }
  }
}

/**
 * This styles dates between the start and end date of the calendar
 * @param {number} start startDate
 * @param {number} end end date
 */
function styleInbetween(start, end) {
  calendarButtons.forEach((btn) => btn.classList.remove('between-dates'));

  for (let i = start; i < end; i++) {
    calendarButtons[i].classList.add('between-dates');
  }
}
