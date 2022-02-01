// GLOBAL VARS & STATE VALUES
let startDate = -1;
let endDate = -1;
let switchState = true;
const calendarButtons = document.querySelectorAll('.date-btn');
calendarButtons.forEach((btn) => btn.addEventListener('click', handleClick));
calendarButtons.forEach((btn) => btn.addEventListener('mouseover', handleHover));
