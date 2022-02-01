class Calendar {
  constructor() {
    this.startDate = -1;
    this.endDate = -1;
    this.container = document.querySelector(selectors.container);
    this.paintButtons();
    this.calendarButtons = document.querySelectorAll(selectors.dateBtn);
    this.calendarButtons.forEach((btn) =>
      btn.addEventListener('click', this.handleClick.bind(this))
    );
    this.calendarButtons.forEach((btn) =>
      btn.addEventListener('mouseover', this.handleHover.bind(this))
    );
  }

  handleClick(e) {
    const {classList} = e.target;
    const current = e.target.getAttribute('data-date');

    if (this.startDate === -1) {
      this.startDate = current;
      classList.add('start-date');
      return;
    }

    //check if theres a start date and selected date is not less than start date
    if (this.startDate > 0 && current > this.startDate) {
      this.endDate = current;
      const currentEnd = document.querySelector(selectors.endDate);

      //remove pre existing end date if available
      if (currentEnd) {
        currentEnd.classList.remove('end-date');
      }

      classList.add('end-date');
      this.styleInbetween(this.startDate, this.endDate);

      return;
    }

    //check if theres a start date and selected date is LESS than start date
    if (this.startDate > 0 && current < this.startDate) {
      const currentStart = document.querySelector(selectors.startDate);
      currentStart.classList.remove('start-date');

      this.startDate = current;

      classList.add('start-date');
      this.styleInbetween(this.startDate, this.endDate);

      return;
    }
  }

  handleHover(e) {
    let targetDate = Number(e.target.getAttribute('data-date'));

    //check if first page is already selected & last page is not selected.
    // Hover efffect doesnt take place when last page is already selected or first page is not selected
    if (this.startDate > 0 && this.endDate === -1) {
      this.calendarButtons.forEach((btn) => btn.classList.remove('between-dates'));

      //apply hover effect only if the start date has been selected
      for (let i = this.startDate; i < targetDate; i++) {
        this.calendarButtons[i].classList.add('between-dates');
      }
    }
  }

  paintButtons() {
    let temp = document.querySelector(selectors.buttonTemplate);
    console.log(temp);

    for (let i = 1; i <= 31; i++) {
      let clone = temp.content.cloneNode(true);
      const btn = clone.querySelector(selectors.button);
      btn.textContent = i;
      btn.setAttribute('data-date', i);
      this.container.appendChild(btn);
    }
  }

  styleInbetween(start, end) {
    this.calendarButtons.forEach((btn) => btn.classList.remove('between-dates'));

    for (let i = start; i < end; i++) {
      this.calendarButtons[i].classList.add('between-dates');
    }
  }
}

const calendar = new Calendar();

// /**
//  * handles calendar dates/buttons clicks
//  * @param {DOM Event Object} e
//  * @returns void
//  */
// function handleClick(e) {
//   console.log(e.target);
//   const current = Number(e.target.textContent);

//   if (startDate === -1) {
//     startDate = current;
//     e.target.classList.add('start-date');
//     return;
//   }

//   //check if theres a start date and selected date is not less than start date
//   if (startDate > 0 && current > startDate) {
//     endDate = current;
//     const currentEnd = document.querySelector('.end-date');

//     //remove pre existing end date if available
//     if (currentEnd) {
//       currentEnd.classList.remove('end-date');
//     }

//     e.target.classList.add('end-date');
//     styleInbetween(startDate, endDate);

//     return;
//   }

//   //check if theres a start date and selected date is LESS than start date
//   if (startDate > 0 && current < startDate) {
//     const currentStart = document.querySelector('.start-date');
//     currentStart.classList.remove('start-date');

//     startDate = current;

//     e.target.classList.add('start-date');
//     styleInbetween(startDate, endDate);

//     return;
//   }
// }

// /**
//  * hover effect only when end date isnt set
//  * @param {DOM Event Object} e
//  */
// function handleHover(e) {
//   if (endDate === -1) {
//     calendarButtons.forEach((btn) => btn.classList.remove('between-dates'));

//     if (startDate > 0) {
//       for (let i = startDate; i < e.target.textContent; i++) {
//         calendarButtons[i].classList.add('between-dates');
//       }
//     }
//   }
// }

// /**
//  * This styles dates between the start and end date of the calendar
//  * @param {number} start startDate
//  * @param {number} end end date
//  */
// function styleInbetween(start, end) {
//   calendarButtons.forEach((btn) => btn.classList.remove('between-dates'));

//   for (let i = start; i < end; i++) {
//     calendarButtons[i].classList.add('between-dates');
//   }
// }

// TODO: Switch to class and used binding or arrow functions for methods

// TODO: Startdate should default to current month

//TODO: Add day labeling and start count from current date
